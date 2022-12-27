import axios from "axios";
import { useMutation } from "react-query";
import {
  createCode,
  consumeCode,
} from "supertokens-web-js/recipe/passwordless";

import { API_URLS } from "@/constants";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const { mutate: sendOtp, isLoading: isSendingOtp } = useMutation(
    async ({ email }) => {
      const { data: userIsRegistered } = await axios.get(
        API_URLS.CHECK_USER_EXISTENCE_BY_EMAIL,
        {
          params: { email },
        }
      );

      if (!userIsRegistered) {
        throw new Error("This user is not registered");
      }

      await createCode({ email });
    }
  );
  const { mutate: validateOtpInput } = useMutation(async ({ otp }) => {
    await consumeCode({
      userInputCode: otp,
    });
  });

  const redirectTo = (url) => () => openUrl(url, true);

  return { sendOtp, isSendingOtp, validateOtpInput, redirectTo };
};

export default useActions;
