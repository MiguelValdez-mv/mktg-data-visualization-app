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
    owner: object().required(),
    avatar: mixed(),
  }),
  PANEL: object().shape({
    name: string().required(),
    description: string(),
    business: object().required(),
  }),
};
