import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";

import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useAlert } from "@/hooks/useAlert";
import { useGetUserById } from "@/hooks/users/useGetUserById";
import { useUpdateUserById } from "@/hooks/users/useUpdateUserById";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const alert = useAlert();

  const queryToGetUserDetail = useGetUserById(userId);
  const queryToGetBusinesses = useGetBusinessesByUserId(userId);
  const userUpdateMutation = useUpdateUserById();

  const { data: user = {} } = queryToGetUserDetail;
  const { name, email, role, avatar, createdAt } = user;
  const userRegistrationDate = format(
    createdAt ? new Date(createdAt) : new Date(),
    "PPPP"
  );
  const initialValues = {
    name: name ?? "",
    email: email ?? "",
    role: role ?? USER_ROLES.ADMIN,
    avatar: avatar ?? "",
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

  const showBusinessList = !isAdminUser(user);

  return {
    isLoading: queryToGetUserDetail.isLoading || queryToGetBusinesses.isLoading,
    businesses: queryToGetBusinesses.data,
    isUpdatingUser: userUpdateMutation.isLoading,
    userRegistrationDate,
    initialValues,
    handleUserUpdateFormSubmit,
    showBusinessList,
  };
};

export default useActions;
