import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { LazyPage } from "./LazyPage";

const Businesses = LazyPage(lazy(() => import("@/pages/Businesses")));
const BusinessDetails = LazyPage(
  lazy(() => import("@/pages/Businesses/Details"))
);
const Connections = LazyPage(lazy(() => import("@/pages/Connections")));
const Login = LazyPage(lazy(() => import("@/pages/Login")));
const Panels = LazyPage(lazy(() => import("@/pages/Panels")));
const PanelDetails = LazyPage(lazy(() => import("@/pages/Panels/Details")));
const Users = LazyPage(lazy(() => import("@/pages/Users")));
const UserDetails = LazyPage(lazy(() => import("@/pages/Users/Details")));
const NotFound = LazyPage(lazy(() => import("@/pages/NotFound")));

export function AppRouter() {
  return (
    <Routes>
      <Route path="negocios" element={<Businesses />} />
      <Route path="negocios/:businessId" element={<BusinessDetails />} />

      <Route path="conexiones" element={<Connections />} />

      <Route path="iniciar-sesion" element={<Login />} />

      <Route path="paneles" element={<Panels />} />
      <Route path="paneles/:panelId" element={<PanelDetails />} />

      <Route path="usuarios" element={<Users />} />
      <Route path="usuarios/:userId" element={<UserDetails />} />

      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="404" />} />
    </Routes>
  );
}
