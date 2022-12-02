import PropTypes from "prop-types";

export const URLS = {
  BUSINESSES: "negocios",
  BUSINESS_DETAILS: "detalles-negocio",
  CONNECTIONS: "conexiones",
  LOGIN: "iniciar-sesion",
  PANELS: "paneles",
  PANEL_DETAILS: "detalles-panel",
  USERS: "usuarios",
  USER_DETAILS: "detalles-usuario",
  NOT_FOUND: "404",
};

export const PROP = {
  children() {
    return PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]);
  },
};
