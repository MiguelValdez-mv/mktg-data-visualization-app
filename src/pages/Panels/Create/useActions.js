import { useNavigate } from "react-router-dom";

import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useCreatePanel } from "@/hooks/panels/useCreatePanel";
import { useAlert } from "@/hooks/useAlert";

const useActions = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const alert = useAlert();

  const queryToGetBusinesses = useGetBusinessesByUserId({ id: user._id });
  const panelCreationMutation = useCreatePanel();

  const { data: businesses = [] } = queryToGetBusinesses;
  const [defaultBusiness] = businesses;
  const initialValues = {
    name: "",
    description: "",
    business: defaultBusiness,
  };

  const handlePanelCreationFormSubmit = ({ business, ...rest }) => {
    const values = {
      businessId: business._id,
      ...rest,
    };

    panelCreationMutation.mutate(values, {
      onSuccess: () => {
        navigate("/panels");
        alert.success(COPY["panels.creation.success"]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading: queryToGetBusinesses.isLoading,
    isCreatingPanel: panelCreationMutation.isLoading,
    businesses,
    initialValues,
    handlePanelCreationFormSubmit,
  };
};

export default useActions;
