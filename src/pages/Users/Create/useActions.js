import { useNavigate } from "react-router-dom";

import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useCreateUser } from "@/hooks/users/useCreateUser";

const useActions = () => {
  const { isLoading, mutate } = useCreateUser();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleUserCreationFormSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    mutate(formData, {
      onSuccess: () => {
        navigate("/users");
        alert.success(COPY["pages.users.creation.success"]);
      },
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading,
    handleUserCreationFormSubmit,
  };
};

export default useActions;
