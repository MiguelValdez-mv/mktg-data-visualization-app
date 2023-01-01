import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { Loader } from "@/components/layout/Loader";
import { AlertTemplate } from "@/components/molecules/AlertTemplate";
import { AuthProvider } from "@/contexts/AuthProvider";
import { useAuth } from "@/hooks/useAuth";
import { useDoesSessionExist } from "@/hooks/useDoesSessionExist";
import { AppRouter } from "@/router";
import { startSuperTokens } from "@/thirdParty/superTokens";

import "./global.css";

startSuperTokens();

const queryClient = new QueryClient();

function Wrapper() {
  const { login } = useAuth();
  const { isLoading } = useDoesSessionExist({
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: ({ sessionExist, user }) => sessionExist && login(user),
  });

  if (isLoading) {
    return <Loader />;
  }

  return <AppRouter />;
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
