import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

import { CONNECTION_TYPES } from "@/constants";
import { COPY } from "@/copy";
import { useCreateConnection } from "@/hooks/connections/useCreateConnection";
import { useAlert } from "@/hooks/useAlert";

const useActions = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const { mutate, isLoading } = useCreateConnection({
    onSuccess: () => {
      navigate("/connections");
      alert.success(COPY["connections.creation.success"]);
    },
    onError: (err) => alert.error(err.message),
  });

  const authenticateWithGoogle = useGoogleLogin({
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    onSuccess: ({ code }) => {
      mutate({ type: CONNECTION_TYPES.GOOGLE_ANALYTICS, code });
    },
  });

  const authenticateWithFacebook = () => {
    FacebookLoginClient.login(
      ({ status, authResponse: { accessToken } = {} }) => {
        if (status !== "connected") return;

        mutate({ type: CONNECTION_TYPES.FACEBOOK_ADS, accessToken });
      },
      {
        scope: ["ads_management", "ads_read", "read_insights"].join(","),
      }
    );
  };

  return {
    isLoading,
    authenticateWithGoogle,
    authenticateWithFacebook,
  };
};

export default useActions;
