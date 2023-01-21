import { format } from "date-fns";
import { useParams } from "react-router-dom";

import { USER_ROLES } from "@/constants";
import { useGetUserById } from "@/hooks/users/useGetUserById";

const useActions = () => {
  const { userId } = useParams();
  const { isLoading, data: user = {} } = useGetUserById(userId);

  const {
    name = "",
    email = "",
    role = USER_ROLES.ADMIN,
    avatar,
    createdAt,
  } = user;
  const userRegistrationDate = format(
    createdAt ? new Date(createdAt) : new Date(),
    "PPPP"
  );
  const initialValues = {
    name,
    email,
    role,
    avatar,
  };

  const handleUserUpdateFormSubmit = () => {};

  return {
    isLoading,
    userRegistrationDate,
    initialValues,
    handleUserUpdateFormSubmit,
  };
};

export default useActions;
