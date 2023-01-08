import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import { PROP } from "@/constants";
import { useAuth } from "@/hooks/useAuth";

export function RequireAuth({ allowedRoles = [], children }) {
  const { isLoggedIn, user } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const isValidRole = !allowedRoles.length || allowedRoles.includes(user.role);
  if (!isValidRole) {
    return <Navigate to="/404" />;
  }

  return children;
}

RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  children: PROP.CHILDREN.isRequired,
};
