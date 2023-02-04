import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { USER_ROLES } from "@/constants";

import { LazyPage } from "./LazyPage";
import { RequireAuth } from "./RequireAuth";

const Default = LazyPage(lazy(() => import("@/pages/Default")));
const Login = LazyPage(lazy(() => import("@/pages/Login")));
const Users = LazyPage(lazy(() => import("@/pages/Users")));
const CreateUser = LazyPage(lazy(() => import("@/pages/Users/Create")));
const UserDetail = LazyPage(lazy(() => import("@/pages/Users/Detail")));
const Connections = LazyPage(lazy(() => import("@/pages/Connections")));
const CreateConnection = LazyPage(
  lazy(() => import("@/pages/Connections/Create"))
);
const Businesses = LazyPage(lazy(() => import("@/pages/Businesses")));
const CreateBusiness = LazyPage(
  lazy(() => import("@/pages/Businesses/Create"))
);
const BusinessDetail = LazyPage(
  lazy(() => import("@/pages/Businesses/Detail"))
);
const Panels = LazyPage(lazy(() => import("@/pages/Panels")));
const PanelDetail = LazyPage(lazy(() => import("@/pages/Panels/Detail")));
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
        path="users/create-user"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <CreateUser />
          </RequireAuth>
        }
      />
      <Route
        path="users/:userId"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <UserDetail />
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
        path="connections/create-connection"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <CreateConnection />
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
        path="businesses/create-business"
        element={
          <RequireAuth allowedRoles={[USER_ROLES.ADMIN]}>
            <CreateBusiness />
          </RequireAuth>
        }
      />
      <Route
        path="businesses/:businessId"
        element={
          <RequireAuth>
            <BusinessDetail />
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
            <PanelDetail />
          </RequireAuth>
        }
      />

      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
