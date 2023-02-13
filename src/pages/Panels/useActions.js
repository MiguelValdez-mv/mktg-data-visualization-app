import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useDeletePanelById } from "@/hooks/panels/useDeletePanelById";
import { useGetPanelsByUserId } from "@/hooks/panels/useGetPanelsByUserId";
import { useAlert } from "@/hooks/useAlert";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();
  const alert = useAlert();

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
  const panelDeletionMutation = useDeletePanelById();

  const deletePanel = (id) => {
    panelDeletionMutation.mutate(id, {
      onSuccess: () => alert.success(COPY["panels.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    showPanelCreationBtn: isAdminUser(user),
    isLoading: queryToGetBusinesses.isLoading || queryToGetPanels.isLoading,
    panels: queryToGetPanels.data,
    isDeletingPanel: panelDeletionMutation.isLoading,
    deletePanel,
  };
};

export default useActions;
