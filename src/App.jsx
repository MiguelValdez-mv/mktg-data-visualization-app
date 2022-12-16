import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "@/router";
import { startSuperTokens } from "@/third-party/superTokens";

import "./global.css";

startSuperTokens();

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRouter />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
