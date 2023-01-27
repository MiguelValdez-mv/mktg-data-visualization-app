import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";

import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useGetUserById } from "@/hooks/users/useGetUserById";
import { useUpdateUserById } from "@/hooks/users/useUpdateUserById";

const useActions = () => {
  const { userId } = useParams();
  const queryToGetUserDetail = useGetUserById(userId);
  const userUpdateMutation = useUpdateUserById();
  const navigate = useNavigate();
  const alert = useAlert();

  const { data: user = {} } = queryToGetUserDetail;
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

  const handleUserUpdateFormSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    userUpdateMutation.mutate(
      { id: userId, formData },
      {
        onSuccess: () => {
          navigate("/users");
          alert.success(COPY["users.detail.update.success"]);
        },
        onError: (err) => alert.error(err.message),
      }
    );
  };

  return {
    isLoading: queryToGetUserDetail.isLoading,
    isUpdatingUser: userUpdateMutation.isLoading,
    userRegistrationDate,
    initialValues,
    handleUserUpdateFormSubmit,
  };
};

export default useActions;
