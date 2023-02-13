import PropTypes from "prop-types";
import { setLocale, object, string, mixed, boolean } from "yup";

import { COPY } from "@/copy";

export const ENV = {
  FACEBOOK_APP_ID: process.env.REACT_APP_FACEBOOK_APP_ID,
  GOOGLE_APP_CLIENT_ID: process.env.REACT_APP_GOOGLE_APP_CLIENT_ID,
};

setLocale({
  mixed: {
    required: COPY["errors.requiredField"],
  },
  string: {
    email: COPY["errors.invalidEmail"],
  },
});

export const FORM_SCHEMES = {
  OTP_CREATION: object().shape({
    email: string().email().required(),
  }),
  OTP_CONSUMPTION: object().shape({
    otp: string().required(),
  }),
  USER_CREATION: object().shape({
    name: string().required(),
    email: string().email().required(),
    role: string().required(),
    avatar: mixed(),
    notifyRegistration: boolean().required(),
  }),
  USER_UPDATE: object().shape({
    name: string().required(),
    email: string().email().required(),
    role: string().required(),
    avatar: mixed(),
  }),
  BUSINESS: object().shape({
    name: string().required(),
    type: string().required(),
    description: string(),
    owner: object().required(),
    avatar: mixed(),
  }),
  PANEL: object().shape({
    name: string().required(),
    description: string(),
    business: object().required(),
  }),
};

export const PROP = {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  REF: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  USER: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
  get USERS() {
    return PropTypes.arrayOf(this.USER);
  },
  BUSINESS: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string,
    ownerId: PropTypes.string.isRequired,
    employeeIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    avatar: PropTypes.string,
  }),
  get BUSINESSES() {
    return PropTypes.arrayOf(this.BUSINESS);
  },
  CONNECTION: PropTypes.shape({
    type: PropTypes.string.isRequired,
    accessToken: PropTypes.string,
    refreshToken: PropTypes.string,
    userId: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  get CONNECTIONS() {
    return PropTypes.arrayOf(this.CONNECTION);
  },
  get PANEL() {
    return PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      businessId: PropTypes.string,
      business: this.BUSINESS,
    });
  },
  get PANELS() {
    return PropTypes.arrayOf(this.PANEL);
  },
};

export const LINKS = {
  FACEBOOK: "https://www.facebook.com/somosopentech",
  INSTAGRAM: "https://www.instagram.com/somosopentech",
  OFFICIAL_WEBSITE: "https://lccopen.tech",
  API: "http://localhost:8080",
};

export const API_URLS = {
  USERS: `${LINKS.API}/users`,
  USER_BY_EMAIL_EXISTS: (email) =>
    `${LINKS.API}/users/user-by-email-exists/${email}`,
  USER_BY_ID: (id) => `${LINKS.API}/users/user-by-id/${id}`,
  USER_BY_SESSION: `${LINKS.API}/users/user-by-session`,

  BUSINESSES: `${LINKS.API}/businesses`,
  BUSINESS_BY_ID: (id) => `${LINKS.API}/businesses/business-by-id/${id}`,
  BUSINESS_EMPLOYEES: (id) =>
    `${LINKS.API}/businesses/business-by-id/${id}/employees`,
  BUSINESSES_BY_USER_ID: (id) =>
    `${LINKS.API}/businesses/businesses-by-user-id/${id}`,

  CONNECTIONS: `${LINKS.API}/connections`,

  PANELS: `${LINKS.API}/panels`,
  PANEL_BY_ID: (id) => `${LINKS.API}/panels/panel-by-id/${id}`,
  PANELS_BY_USER_ID: (id) => `${LINKS.API}/panels/panels-by-user-id/${id}`,
};

export const QUERY_KEYS = {
  DOES_SESSION_EXIST: "DOES_SESSION_EXIST",
  USERS: "USERS",
  BUSINESSES: "BUSINESSES",
  CONNECTIONS: "CONNECTIONS",
  PANELS: "PANELS",
};

export const USER_ROLES = {
  ADMIN: "ADMIN",
  OWNER: "OWNER",
  EMPLOYEE: "EMPLOYEE",
};

export const BUSINESS_TYPES = {
  SERVICE: "SERVICE",
  COMMERCIAL: "COMMERCIAL",
  INDUSTRIAL: "INDUSTRIAL",
};

export const CONNECTION_TYPES = {
  GOOGLE_ANALYTICS: "GOOGLE_ANALYTICS",
  FACEBOOK_ADS: "FACEBOOK_ADS",
};
