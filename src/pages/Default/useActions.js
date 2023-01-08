import { useAuth } from "@/hooks/useAuth";
import { isUserAdmin } from "@/utils/isUserAdmin";

const useActions = () => {
  const { isLoggedIn, user } = useAuth();

  let to;
  if (!isLoggedIn) {
    to = "/login";
  } else if (isUserAdmin(user)) {
    to = "/users";
  } else {
    to = "/businesses";
  }

  return { to };
};

export default useActions;
