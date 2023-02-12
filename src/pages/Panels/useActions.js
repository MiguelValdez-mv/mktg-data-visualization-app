import { useAuth } from "@/hooks/auth/useAuth";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();

  return {
    showPanelCreationBtn: isAdminUser(user),
  };
};

export default useActions;
