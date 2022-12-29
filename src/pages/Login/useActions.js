import { COPY } from "@/copy";
import { useCreateOtp } from "@/hooks/auth/useCreateOtp";
import { useValidateOtp } from "@/hooks/auth/useValidateOtp";
import { useAlert } from "@/hooks/useAlert";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const alert = useAlert();
  const otpCreationMutation = useCreateOtp();
  const otpValidationMutation = useValidateOtp();

  const handleOtpCreationFormSubmit = (values) => {
    const { email } = values;

    otpCreationMutation.mutate(values, {
      onSuccess: () => {
        alert.success(COPY["pages.login.otpCreation.success"](email));
      },
      onError: ({ message }) => {
        alert.error(message);
      },
    });
  };
  const handleOtpValidationFormSubmit = (values) => {
    otpValidationMutation.mutate(values, {
      onSuccess: () => {
        // alert.success(COPY["pages.login.otpValidation.success"]());
      },
      onError: ({ message }) => {
        alert.error(message);
      },
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
