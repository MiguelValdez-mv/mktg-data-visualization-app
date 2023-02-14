import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";

import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useGetPanelById } from "@/hooks/panels/useGetPanelById";
import { useUpdatePanelById } from "@/hooks/panels/useUpdatePanelById";
import { useAlert } from "@/hooks/useAlert";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { panelId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const alert = useAlert();

  const queryToGetPanelDetail = useGetPanelById({ id: panelId });
  const { data: { name, description, businessId, createdAt } = {} } =
    queryToGetPanelDetail;

  const queryToGetBusinesses = useGetBusinessesByUserId({
    id: user._id,
    enabled: !!businessId,
    select: ({ data: businesses }) => ({
      panelBusiness: businesses.find((b) => b._id === businessId),
      businesses,
    }),
  });
  const { data: { panelBusiness, businesses } = {} } = queryToGetBusinesses;

  const panelUpdateMutation = useUpdatePanelById();

  const panelRegistrationDate = format(
    createdAt ? new Date(createdAt) : new Date(),
    "PPPP"
  );
  const initialValues = {
    name: name ?? "",
    description: description ?? "",
    business: panelBusiness,
  };
  const disablePanelUpdateForm = !isAdminUser(user);

  const handlePanelUpdateFormSubmit = ({
    business: businessInput,
    ...rest
  }) => {
    const newData = {
      businessId: businessInput._id,
      ...rest,
    };

    panelUpdateMutation.mutate(
      { id: panelId, newData },
      {
        onSuccess: () => {
          navigate(-1);
          alert.success(COPY["panels.settings.update.success"]);
        },
        onError: (err) => alert.error(err.message),
      }
    );
  };

  return {
    isLoading:
      queryToGetPanelDetail.isLoading || queryToGetBusinesses.isLoading,
    businesses,
    isUpdatingPanel: panelUpdateMutation.isLoading,
    panelRegistrationDate,
    initialValues,
    disablePanelUpdateForm,
    handlePanelUpdateFormSubmit,
  };
};

export default useActions;
