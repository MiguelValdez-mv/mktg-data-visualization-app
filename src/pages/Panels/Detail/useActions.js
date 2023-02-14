import { useParams } from "react-router-dom";

import { useAuth } from "@/hooks/auth/useAuth";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { useDimensions } from "@/hooks/useDimensions";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { panelId } = useParams();
  const { user } = useAuth();
  const { isLargeScreen } = useDimensions();

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const { data: { name = "" } = {} } = queryToGetPanelDetail;

  const currentUserIsAdmin = isAdminUser(user);

  return {
    panelSettingsPath: `/panels/${panelId}/settings`,
    isLargeScreen,
    isLoading: queryToGetPanelDetail.isLoading,
    panelName: name,
    currentUserIsAdmin,
  };
};

export default useActions;
