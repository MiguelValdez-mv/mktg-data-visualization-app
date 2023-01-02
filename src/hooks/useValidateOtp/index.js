import axios from "axios";
import { useMutation } from "react-query";
import { consumeCode } from "supertokens-web-js/recipe/passwordless";

import { API_URLS } from "@/constants";
import { COPY } from "@/copy";

const mutationFn = async ({ otp }) => {
  const { status, maximumCodeInputAttempts, failedCodeInputAttemptCount } =
    await consumeCode({ userInputCode: otp });

  if (status === "OK") {
    const { data: user } = await axios.get(
      API_URLS.GET_USER_DETAILS_FROM_SUPERTOKENS_ID
    );

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

export const useValidateOtp = (opts = {}) => useMutation(mutationFn, opts);
