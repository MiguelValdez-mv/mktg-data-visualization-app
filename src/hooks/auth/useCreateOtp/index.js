import axios from "axios";
import { useMutation } from "react-query";
import { createCode } from "supertokens-web-js/recipe/passwordless";

import { API_URLS } from "@/constants";
import { COPY } from "@/copy";

const mutationFn = async ({ email }) => {
  const { data: userIsRegistered } = await axios.get(
    API_URLS.CHECK_USER_EXISTENCE_BY_EMAIL,
    { params: { email } }
  );

  if (!userIsRegistered) {
    throw new Error(COPY["errors.unregisteredUser"]);
  }

  const res = await createCode({ email });

  return Promise.resolve(res);
};

export const useCreateOtp = (opts = {}) => useMutation(mutationFn, opts);
