import { useAuth } from "@/hooks/auth/useAuth";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { isUserAdmin } from "@/utils/isUserAdmin";

const useActions = () => {
  const { user } = useAuth();
  const queryToGetBusiness = useGetBusinessesByUserId(user._id);

  const deleteBusinesses = () => {};

  return {
    showBusinessCreationBtn: isUserAdmin(user),
    isLoading: queryToGetBusiness.isLoading,
    businesses: queryToGetBusiness.data,
    deleteBusinesses,
  };
};

export default useActions;
