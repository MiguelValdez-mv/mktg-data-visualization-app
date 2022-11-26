import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { URLS } from "@/constants";

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
      <Route path={URLS.BUSINESSES} element={<Businesses />} />
      <Route path={URLS.BUSINESS_DETAILS} element={<BusinessDetails />} />
      <Route path={URLS.CONNECTIONS} element={<Connections />} />
      <Route path={URLS.LOGIN} element={<Login />} />
      <Route path={URLS.PANELS} element={<Panels />} />
      <Route path={URLS.PANEL_DETAILS} element={<PanelDetails />} />
      <Route path={URLS.USERS} element={<Users />} />
      <Route path={URLS.USER_DETAILS} element={<UserDetails />} />
      <Route path={URLS.NOT_FOUND} element={<NotFound />} />
      <Route path="*" element={<Navigate to={URLS.NOT_FOUND} />} />
    </Routes>
  );
}
