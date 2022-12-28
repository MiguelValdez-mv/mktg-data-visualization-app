import axios from "axios";
import { useMutation } from "react-query";
import {
  createCode,
  consumeCode,
} from "supertokens-web-js/recipe/passwordless";

import { API_URLS } from "@/constants";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const {
    mutate: createOtp,
    isLoading: isCreatingOtp,
    isSuccess: successInOtpCreation,
  } = useMutation(async ({ email }) => {
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
  });
  const { mutate: validateOtp, isLoading: isValidatingOtp } = useMutation(
    ({ otp }) => consumeCode({ userInputCode: otp })
  );

  const handleOtpCreationFormSubmit = (values) => createOtp(values);
  const handleOtpValidationFormSubmit = (values) => validateOtp(values);
  const redirectTo = (url) => () => openUrl(url, true);

  return {
    isLoading: isCreatingOtp || isValidatingOtp,
    successInOtpCreation,
    handleOtpCreationFormSubmit,
    handleOtpValidationFormSubmit,
    redirectTo,
  };
};

export default useActions;
