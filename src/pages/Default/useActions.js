import { useAuth } from "@/hooks/auth/useAuth";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { isLoggedIn, user } = useAuth();

  let to;
  if (!isLoggedIn) {
    to = "/login";
  } else if (isAdminUser(user)) {
    to = "/users";
  } else {
    to = "/businesses";
  }

  return { to };
};

export default useActions;
