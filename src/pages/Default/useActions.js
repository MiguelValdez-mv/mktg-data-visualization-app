import { useAuth } from "@/hooks/useAuth";
import { isUserAdmin } from "@/utils/isUserAdmin";

const useActions = () => {
  const { isLoggedIn, user } = useAuth();

  let to;
  if (!isLoggedIn) {
    to = "/iniciar-sesion";
  } else if (isUserAdmin(user)) {
    to = "/usuarios";
  } else {
    to = "/negocios";
  }

  return { to };
};

export default useActions;
