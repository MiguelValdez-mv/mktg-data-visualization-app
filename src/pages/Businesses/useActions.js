import { useAuth } from "@/hooks/auth/useAuth";
import { isUserAdmin } from "@/utils/isUserAdmin";

const useActions = () => {
  const { user } = useAuth();

  return {
    showBusinessCreationBtn: isUserAdmin(user),
  };
};

export default useActions;
