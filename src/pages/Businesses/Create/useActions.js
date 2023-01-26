import { BUSINESS_TYPES, USER_ROLES } from "@/constants";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const getOwnersQuery = useGetUsers({ role: USER_ROLES.OWNER });

  const { data: owners = [] } = getOwnersQuery;
  const [defaultOwner] = owners;
  const initialValues = {
    name: "",
    type: BUSINESS_TYPES.SERVICE,
    description: "",
    owner: defaultOwner,
    avatar: undefined,
  };

  const handleBusinessCreationFormSubmit = () => {};

  return {
    isLoading: getOwnersQuery.isLoading,
    owners,
    initialValues,
    handleBusinessCreationFormSubmit,
  };
};

export default useActions;
