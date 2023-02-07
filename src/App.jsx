import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { setDefaultOptions } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect } from "react";
import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AlertTemplate } from "@/components/layout/AlertTemplate";
import { Loader } from "@/components/layout/Loader";
import { Row } from "@/components/layout/Row";
import { Sidebar } from "@/components/layout/Sidebar";
import { ENV } from "@/constants";
import { AuthProvider } from "@/contexts/AuthProvider";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import { useAuth } from "@/hooks/auth/useAuth";
import { AppRouter } from "@/router";
import { startSupertokens } from "@/thirdParty/supertokens";

import "./global.css";

startSupertokens();
setDefaultOptions({ locale: es });

const queryClient = new QueryClient();

function Wrapper() {
  const { isLoggedIn, user, isCheckingSession } = useAuth();

  useEffect(() => {
    const initializeFacebookLoginClient = async () => {
      await FacebookLoginClient.loadSdk("en_US");

      FacebookLoginClient.init({
        appId: ENV.FACEBOOK_APP_ID,
        version: "v15.0",
      });
    };

    initializeFacebookLoginClient();
  }, []);

  return isCheckingSession ? (
    <Loader />
  ) : (
    <Row>
      {isLoggedIn && <Sidebar user={user} />}
      <AppRouter />
    </Row>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AlertProvider template={AlertTemplate} timeout={5 * 1000}>
          <AuthProvider>
            <SidebarProvider>
              <GoogleOAuthProvider clientId={ENV.GOOGLE_APP_CLIENT_ID}>
                <Wrapper />
                <ReactQueryDevtools />
              </GoogleOAuthProvider>
            </SidebarProvider>
          </AuthProvider>
        </AlertProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
