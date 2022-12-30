import { useMutation } from "react-query";
import { consumeCode } from "supertokens-web-js/recipe/passwordless";

import { COPY } from "@/copy";

const mutationFn = async ({ otp }) => {
  const { status, maximumCodeInputAttempts, failedCodeInputAttemptCount } =
    await consumeCode({ userInputCode: otp });

  if (status === "OK") {
    return Promise.resolve(true);
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

export const useValidateOtp = (opts = {}) => useMutation(mutationFn, opts);
