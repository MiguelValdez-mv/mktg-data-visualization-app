import { useNavigate } from "react-router-dom";

import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useCreateOtp } from "@/hooks/useCreateOtp";
import { useValidateOtp } from "@/hooks/useValidateOtp";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const otpCreationMutation = useCreateOtp();
  const otpValidationMutation = useValidateOtp();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleOtpCreationFormSubmit = (values) => {
    otpCreationMutation.mutate(values, {
      onSuccess: () => {
        alert.success(COPY["pages.login.otpCreation.success"](values.email));
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const handleOtpValidationFormSubmit = (values) => {
    otpValidationMutation.mutate(values, {
      onSuccess: (user) => {
        navigate("/");
        alert.success(COPY["pages.login.otpValidation.success"](user.name));
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const redirectTo = (url) => () => openUrl(url, true);

  return {
    isLoading: otpCreationMutation.isLoading || otpValidationMutation.isLoading,
    otpCreationIsSuccessful: otpCreationMutation.isSuccess,
    changeEmail: otpCreationMutation.reset,
    handleOtpCreationFormSubmit,
    handleOtpValidationFormSubmit,
    redirectTo,
  };
};

export default useActions;
