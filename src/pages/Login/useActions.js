import { openUrl } from "@/utils/openUrl";

const useActions = () => {
  const redirectToSocialNetwork = (url) => () => openUrl(url, true);

  return { redirectToSocialNetwork };
};

export default useActions;
