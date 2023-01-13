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

export const FORM_VALIDATION_SCHEMES = {
  OTP_CREATION: object().shape({
    email: string().email().required(),
  }),
  OTP_VALIDATION: object().shape({
    otp: string().required(),
  }),
  USER_CREATION: object().shape({
    name: string().required(),
    email: string().email().required(),
    role: string().required(),
    file: mixed(),
    notifyRegistration: boolean(),
  }),
};

export const PROP = {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  USER: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }),
  REF: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export const LINKS = {
  FACEBOOK: "https://www.facebook.com/somosopentech",
  INSTAGRAM: "https://www.instagram.com/somosopentech",
  OFFICIAL_WEBSITE: "https://lccopen.tech",
  API: "http://localhost:8080",
};

export const API_URLS = {
  USERS: `${LINKS.API}/users`,
  CHECK_USER_EXISTENCE_BY_EMAIL: `${LINKS.API}/users/user-by-email-exists`,
  GET_USER_FROM_SESSION: `${LINKS.API}/users/get-user-from-session`,
};

export const QUERY_KEYS = {
  DOES_SESSION_EXIST: "DOES_SESSION_EXIST",
};

export const USER_ROLES = {
  ADMIN: "ADMIN",
  OWNER: "OWNER",
  EMPLOYEE: "EMPLOYEE",
};
