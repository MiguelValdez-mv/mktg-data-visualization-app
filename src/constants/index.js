import PropTypes from "prop-types";
import { object, string, setLocale } from "yup";

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
};

export const PROP = {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const LINKS = {
  FACEBOOK: "https://www.facebook.com/somosopentech",
  INSTAGRAM: "https://www.instagram.com/somosopentech",
  OFFICIAL_WEBSITE: "https://lccopen.tech",
  API: "http://localhost:8080",
};

export const API_URLS = {
  CHECK_USER_EXISTENCE_BY_EMAIL: `${LINKS.API}/users/user-by-email-exists`,
  GET_USER_DETAILS_FROM_SUPERTOKENS_ID: `${LINKS.API}/users/get-user-details-from-supertokens-id`,
};
