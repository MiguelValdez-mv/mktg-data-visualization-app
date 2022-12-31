import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { Loader } from "@/components/layout/Loader";
import { AlertTemplate } from "@/components/molecules/AlertTemplate";
import { AuthProvider } from "@/contexts/AuthProvider";
import { useAuth } from "@/hooks/useAuth";
import { useDoesSessionExist } from "@/hooks/useDoesSessionExist";
import { useNavigate } from "@/hooks/useNavigate";
import { AppRouter } from "@/router";
import { startSuperTokens } from "@/thirdParty/superTokens";
import { isUserAdmin } from "@/utils/isUserAdmin";

import "./global.css";

startSuperTokens();

const queryClient = new QueryClient();

function Wrapper() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isLoading } = useDoesSessionExist({
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: ({ sessionExist, user }) => {
      if (!sessionExist) return;
      login(user);
      navigate(isUserAdmin(user) ? "/usuarios" : "/negocios");
    },
  });

  if (isLoading) return <Loader />;

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
