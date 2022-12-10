import PropTypes from "prop-types";
import { object, string, setLocale } from "yup";

import { COPY } from "@/copy";

setLocale({
  mixed: {
    required: COPY["forms.errors.requiredField"],
  },
  string: {
    email: COPY["forms.errors.invalidEmail"],
  },
});

export const FORM_VALIDATION_SCHEMES = {
  AUTH_SEND_OTP: object().shape({
    email: string().email().required(),
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
};
