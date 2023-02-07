import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";

const useActions = () => {
  const authenticateWithGoogle = useGoogleLogin({
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });

  const authenticateWithFacebook = () => {
    FacebookLoginClient.login(undefined, {
      scope: ["ads_management", "ads_read"].join(","),
    });
  };

  return {
    authenticateWithGoogle,
    authenticateWithFacebook,
  };
};

export default useActions;
