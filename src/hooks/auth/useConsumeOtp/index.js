import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { consumeCode } from "supertokens-web-js/recipe/passwordless";

import { API_URLS, QUERY_KEYS } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";

const mutationFn = async ({ otp }) => {
  const { status, maximumCodeInputAttempts, failedCodeInputAttemptCount } =
    await consumeCode({ userInputCode: otp });

  if (status === "OK") {
    const { data: user } = await axios.get(API_URLS.USER_BY_SESSION);

    return Promise.resolve(user);
  }

  if (status === "INCORRECT_USER_INPUT_CODE_ERROR") {
    const attemptsRemaining =
      maximumCodeInputAttempts - failedCodeInputAttemptCount;

    throw new Error(COPY["errors.invalidOtpInput"](attemptsRemaining));
  }

  if (status === "EXPIRED_USER_INPUT_CODE_ERROR") {
    throw new Error(COPY["errors.otpExpired"]);
  }

  throw new Error(COPY["errors.unexpectedError"]);
};

export const useConsumeOtp = (opts = {}) => {
  const queryClient = useQueryClient();
  const authCtx = useAuth();

  return useMutation(mutationFn, {
    ...opts,
    onSuccess: (user) => {
      queryClient.invalidateQueries([QUERY_KEYS.DOES_SESSION_EXIST]);
      authCtx.login(user);
      opts.onSuccess?.();
    },
  });
};
