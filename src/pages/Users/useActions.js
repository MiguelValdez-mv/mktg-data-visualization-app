import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useDeleteUsers } from "@/hooks/users/useDeleteUsers";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const queryToGetUsers = useGetUsers();
  const deleteUsersMutation = useDeleteUsers();
  const alert = useAlert();

  const deleteUsers = (users) => {
    deleteUsersMutation.mutate(users, {
      onSuccess: () => alert.success(COPY["users.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading: queryToGetUsers.isLoading,
    users: queryToGetUsers.data,
    deleteUsers,
    isDeletingUsers: deleteUsersMutation.isLoading,
  };
};

export default useActions;
