import { Provider as AlertProvider } from "react-alert";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AlertTemplate } from "@/components/molecules/AlertTemplate";
import { AppRouter } from "@/router";
import { startSuperTokens } from "@/thirdParty/superTokens";

import "./global.css";

startSuperTokens();

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AlertProvider template={AlertTemplate} timeout={5000}>
          <AppRouter />

          <ReactQueryDevtools />
        </AlertProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
