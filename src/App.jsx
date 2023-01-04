import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AlertTemplate } from "@/components/layout/AlertTemplate";
import { Loader } from "@/components/layout/Loader";
import { Row } from "@/components/layout/Row";
import { Sidebar } from "@/components/layout/Sidebar";
import { AuthProvider } from "@/contexts/AuthProvider";
import { useAuth } from "@/hooks/useAuth";
import { useDoesSessionExist } from "@/hooks/useDoesSessionExist";
import { AppRouter } from "@/router";
import { startSuperTokens } from "@/thirdParty/superTokens";

import "./global.css";

startSuperTokens();

const queryClient = new QueryClient();

function Wrapper() {
  const { login, isLoggedIn, user } = useAuth();
  const { isLoading } = useDoesSessionExist({
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: (params) => params.sessionExist && login(params.user),
  });

  return isLoading ? (
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
        <AuthProvider>
          <AlertProvider template={AlertTemplate} timeout={5000}>
            <Wrapper />
            <ReactQueryDevtools />
          </AlertProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
