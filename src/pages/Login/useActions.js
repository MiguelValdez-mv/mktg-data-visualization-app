import { useNavigate } from "react-router-dom";

import { COPY } from "@/copy";
import { useConsumeOtp } from "@/hooks/auth/useConsumeOtp";
import { useCreateOtp } from "@/hooks/auth/useCreateOtp";
import { useAlert } from "@/hooks/useAlert";
import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const otpCreationMutation = useCreateOtp();
  const otpConsumptionMutation = useConsumeOtp();

  const handleOtpCreationFormSubmit = (values) => {
    otpCreationMutation.mutate(values, {
      onSuccess: () => {
        alert.success(COPY["login.otpCreation.success"](values.email));
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const handleOtpConsumptionFormSubmit = (values) => {
    otpConsumptionMutation.mutate(values, {
      onSuccess: (user) => {
        navigate("/");
        alert.success(COPY["login.otpConsumption.success"](user.name));
      },
      onError: (err) => alert.error(err.message),
    });
  };
  const redirectTo = (url) => () => openUrl(url, true);

  return {
    isLoading:
      otpCreationMutation.isLoading || otpConsumptionMutation.isLoading,
    otpCreationIsSuccessful: otpCreationMutation.isSuccess,
    changeEmail: otpCreationMutation.reset,
    handleOtpCreationFormSubmit,
    handleOtpConsumptionFormSubmit,
    redirectTo,
  };
};

export default useActions;
