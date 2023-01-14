import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const { data: users, isLoading } = useGetUsers();

  return { users, isLoading };
};

export default useActions;
