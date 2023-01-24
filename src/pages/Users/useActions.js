import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useDeleteUsers } from "@/hooks/users/useDeleteUsers";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const getUsersQuery = useGetUsers();
  const deleteUsersMutation = useDeleteUsers();
  const alert = useAlert();

  const deleteUsers = (users) => {
    deleteUsersMutation.mutate(users, {
      onSuccess: () => alert.success(COPY["users.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    users: getUsersQuery.data,
    isLoading: getUsersQuery.isLoading,
    deleteUsers,
    isDeletingUsers: deleteUsersMutation.isLoading,
  };
};

export default useActions;
