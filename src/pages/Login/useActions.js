import { useCreateOtp } from "@/hooks/auth/useCreateOtp";
import { useValidateOtp } from "@/hooks/auth/useValidateOtp";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const {
    mutate: createOtp,
    isLoading: isCreatingOtp,
    isSuccess: successInOtpCreation,
    reset: changeEmail,
  } = useCreateOtp();
  const { mutate: validateOtp, isLoading: isValidatingOtp } = useValidateOtp();

  const handleOtpCreationFormSubmit = (values) => createOtp(values);
  const handleOtpValidationFormSubmit = (values) => validateOtp(values);
  const redirectTo = (url) => () => openUrl(url, true);

  return {
    isLoading: isCreatingOtp || isValidatingOtp,
    successInOtpCreation,
    changeEmail,
    handleOtpCreationFormSubmit,
    handleOtpValidationFormSubmit,
    redirectTo,
  };
};

export default useActions;
