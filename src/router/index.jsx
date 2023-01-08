import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { USER_ROLES } from "@/constants";

import { LazyPage } from "./LazyPage";
import { RequireAuth } from "./RequireAuth";

const Default = LazyPage(lazy(() => import("@/pages/Default")));
const Login = LazyPage(lazy(() => import("@/pages/Login")));
const Users = LazyPage(lazy(() => import("@/pages/Users")));
const UserDetails = LazyPage(lazy(() => import("@/pages/Users/Details")));
const Connections = LazyPage(lazy(() => import("@/pages/Connections")));
const Businesses = LazyPage(lazy(() => import("@/pages/Businesses")));
const BusinessDetails = LazyPage(
  lazy(() => import("@/pages/Businesses/Details"))
);
const Panels = LazyPage(lazy(() => import("@/pages/Panels")));
const PanelDetails = LazyPage(lazy(() => import("@/pages/Panels/Details")));
const NotFound = LazyPage(lazy(() => import("@/pages/NotFound")));

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Default />} />

      <Route path="login" element={<Login />} />

      <Route
        path="users"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <Users />
          </RequireAuth>
        }
      />
      <Route
        path="users/:userId"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <UserDetails />
          </RequireAuth>
        }
      />

      <Route
        path="connections"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <Connections />
          </RequireAuth>
        }
      />

      <Route
        path="businesses"
        element={
          <RequireAuth>
            <Businesses />
          </RequireAuth>
        }
      />
      <Route
        path="businesses/:businessId"
        element={
          <RequireAuth>
            <BusinessDetails />
          </RequireAuth>
        }
      />

      <Route
        path="panels"
        element={
          <RequireAuth>
            <Panels />
          </RequireAuth>
        }
      />
      <Route
        path="panels/:panelId"
        element={
          <RequireAuth>
            <PanelDetails />
          </RequireAuth>
        }
      />

      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
