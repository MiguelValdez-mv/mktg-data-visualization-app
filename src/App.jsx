import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "@/router";
import { startSuperTokens } from "@/third-party/superTokens";

startSuperTokens();

export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
