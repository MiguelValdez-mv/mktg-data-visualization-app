import { useNavigate } from "react-router-dom";

import { BUSINESS_TYPES, USER_ROLES } from "@/constants";
import { COPY } from "@/copy";
import { useCreateBusiness } from "@/hooks/businesses/useCreateBusiness";
import { useAlert } from "@/hooks/useAlert";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  const queryToGetOwners = useGetUsers({ params: { role: USER_ROLES.OWNER } });
  const businessCreationMutation = useCreateBusiness();

  const { data: owners = [] } = queryToGetOwners;
  const [defaultOwner] = owners;
  const initialValues = {
    name: "",
    type: BUSINESS_TYPES.SERVICE,
    description: "",
    owner: defaultOwner,
    avatar: "",
  };

  const handleBusinessCreationFormSubmit = ({ owner, ...rest }) => {
    const values = {
      ownerId: owner._id,
      ...rest,
    };

    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    businessCreationMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/businesses");
        alert.success(COPY["businesses.creation.success"]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading: queryToGetOwners.isLoading,
    isCreatingBusiness: businessCreationMutation.isLoading,
    owners,
    initialValues,
    handleBusinessCreationFormSubmit,
  };
};

export default useActions;
