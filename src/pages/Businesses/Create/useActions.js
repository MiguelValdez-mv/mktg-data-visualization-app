import { BUSINESS_TYPES } from "@/constants";

const useActions = () => {
  const initialValues = {
    name: "",
    type: BUSINESS_TYPES.SERVICE,
    description: "",
    avatar: undefined,
    ownerId: null,
  };

  const handleBusinessCreationFormSubmit = () => {};

  return { initialValues, handleBusinessCreationFormSubmit };
};

export default useActions;
