import { useNavigate, useSearchParams } from "react-router-dom";

import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useCreateUser } from "@/hooks/users/useCreateUser";

const useActions = () => {
  const { isLoading, mutate } = useCreateUser();
  const navigate = useNavigate();
  const alert = useAlert();
  const [searchParams] = useSearchParams();

  const initialValues = {
    name: "",
    email: "",
    role: searchParams.get("role") ?? USER_ROLES.ADMIN,
    avatar: "",
    notifyRegistration: false,
  };

  const handleUserCreationFormSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    mutate(formData, {
      onSuccess: () => {
        navigate("/users");
        alert.success(COPY["users.creation.success"]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading,
    initialValues,
    handleUserCreationFormSubmit,
  };
};

export default useActions;
