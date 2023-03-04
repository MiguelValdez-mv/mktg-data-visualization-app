import { COPY } from "@/copy";
import { useAlert } from "@/hooks/useAlert";
import { useDeleteUsers } from "@/hooks/users/useDeleteUsers";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const alert = useAlert();

  const queryToGetUsers = useGetUsers();
  const userDeletionMutation = useDeleteUsers();

  const deleteUsers = (users) => {
    const userIds = users.map(({ _id }) => _id);

    userDeletionMutation.mutate(userIds, {
      onSuccess: () => alert.success(COPY["users.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    isLoading: queryToGetUsers.isLoading,
    users: queryToGetUsers.data,
    isDeletingUsers: userDeletionMutation.isLoading,
    deleteUsers,
  };
};

export default useActions;
