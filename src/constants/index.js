import PropTypes from "prop-types";
import { setLocale, object, string, mixed, boolean } from "yup";

import { COPY } from "@/copy";

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
    avatar: mixed(),
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
};

export const LINKS = {
  FACEBOOK: "https://www.facebook.com/somosopentech",
  INSTAGRAM: "https://www.instagram.com/somosopentech",
  OFFICIAL_WEBSITE: "https://lccopen.tech",
  API: "http://localhost:8080",
};

export const API_URLS = {
  USERS: `${LINKS.API}/users`,
  USER_BY_EMAIL_EXISTS: `${LINKS.API}/users/user-by-email-exists`,
  USER_BY_ID: (id) => `${LINKS.API}/users/user-by-id/${id}`,
  USER_BY_SESSION: `${LINKS.API}/users/user-by-session`,
};

export const QUERY_KEYS = {
  DOES_SESSION_EXIST: "DOES_SESSION_EXIST",
  USERS: "USERS",
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
