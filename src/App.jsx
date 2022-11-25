import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperTokens from "supertokens-web-js";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import Session from "supertokens-web-js/recipe/session";

import Businesses from "@/pages/Businesses";
import BusinessDetails from "@/pages/Businesses/Details";
import Connections from "@/pages/Connections";
import Login from "@/pages/Login";
import Panels from "@/pages/Panels";
import PanelDetails from "@/pages/Panels/Details";
import Users from "@/pages/Users";
import UserDetails from "@/pages/Users/Details";

SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:8080",
    apiBasePath: "/auth",
    appName: "Marketing data visualization",
  },
  recipeList: [Session.init(), Passwordless.init()],
});

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="negocios" element={<Businesses />} />
        <Route path="detalles-negocio" element={<BusinessDetails />} />

        <Route path="conexiones" element={<Connections />} />

        <Route path="iniciar-sesion" element={<Login />} />

        <Route path="paneles" element={<Panels />} />
        <Route path="detalles-panel" element={<PanelDetails />} />

        <Route path="usuarios" element={<Users />} />
        <Route path="detalles-usuario" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
