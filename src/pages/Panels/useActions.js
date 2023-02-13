import { useAuth } from "@/hooks/auth/useAuth";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useGetPanelsByUserId } from "@/hooks/panels/useGetPanelsByUserId";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();

  const queryToGetBusinesses = useGetBusinessesByUserId({ id: user._id });
  const queryToGetPanels = useGetPanelsByUserId({
    id: user._id,
    enabled: !!queryToGetBusinesses.data,
    select: ({ data: panels }) =>
      panels.map(({ businessId, ...rest }) => ({
        ...rest,
        business: queryToGetBusinesses.data.find(
          (business) => business._id === businessId
        ),
      })),
  });

  return {
    showPanelCreationBtn: isAdminUser(user),
    isLoading: queryToGetBusinesses.isLoading || queryToGetPanels.isLoading,
    panels: queryToGetPanels.data,
  };
};

export default useActions;
