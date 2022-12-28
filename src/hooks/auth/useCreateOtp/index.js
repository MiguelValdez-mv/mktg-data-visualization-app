import axios from "axios";
import { useMutation } from "react-query";
import { createCode } from "supertokens-web-js/recipe/passwordless";

import { API_URLS } from "@/constants";

const mutationFn = async ({ email }) => {
  const { data: userIsRegistered } = await axios.get(
    API_URLS.CHECK_USER_EXISTENCE_BY_EMAIL,
    { params: { email } }
  );

  if (!userIsRegistered) {
    throw new Error("This user is not registered");
  }

  await createCode({ email });
};

export const useCreateOtp = (opts = {}) => useMutation(mutationFn, opts);
