import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
// import { useAuth } from "@/hooks/useAuth";
import { useCreateOtp } from "@/hooks/useCreateOtp";
import { useValidateOtp } from "@/hooks/useValidateOtp";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const alert = useAlert();
  // const { login } = useAuth();
  const otpCreationMutation = useCreateOtp();
  const otpValidationMutation = useValidateOtp();

  const handleOtpCreationFormSubmit = (values) => {
    otpCreationMutation.mutate(values, {
      onSuccess: () => {
        alert.success(COPY["pages.login.otpCreation.success"](values.email));
      },
      onError: ({ message }) => {
        alert.error(message);
      },
    });
  };
  const handleOtpValidationFormSubmit = (values) => {
    otpValidationMutation.mutate(values, {
      onSuccess: () => {
        // login(user);
        // alert.success(COPY["pages.login.otpValidation.success"](user.fullName));
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
