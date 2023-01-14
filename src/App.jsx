import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AlertTemplate } from "@/components/layout/AlertTemplate";
import { Loader } from "@/components/layout/Loader";
import { Row } from "@/components/layout/Row";
import { Sidebar } from "@/components/layout/Sidebar";
import { AuthProvider } from "@/contexts/AuthProvider";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import { useAuth } from "@/hooks/auth/useAuth";
import { AppRouter } from "@/router";
import { startSupertokens } from "@/thirdParty/supertokens";

import "./global.css";

startSupertokens();

const queryClient = new QueryClient();

function Wrapper() {
  const { isLoggedIn, user, isCheckingSession } = useAuth();

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
              <Wrapper />
              <ReactQueryDevtools />
            </SidebarProvider>
          </AuthProvider>
        </AlertProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
