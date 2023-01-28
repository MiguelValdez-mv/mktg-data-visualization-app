import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useDeleteBusinesses } from "@/hooks/businesses/useDeleteBusinesses";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useAlert } from "@/hooks/useAlert";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { user } = useAuth();
  const alert = useAlert();

  const queryToGetBusiness = useGetBusinessesByUserId(user._id);
  const deleteBusinessesMutation = useDeleteBusinesses();

  const deleteBusinesses = (businesses) => {
    const businessIds = businesses.map(({ _id }) => _id);

    deleteBusinessesMutation.mutate(businessIds, {
      onSuccess: () => alert.success(COPY["businesses.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    showBusinessCreationBtn: isAdminUser(user),
    isLoading: queryToGetBusiness.isLoading,
    businesses: queryToGetBusiness.data,
    deleteBusinesses,
    isDeletingBusinesses: deleteBusinessesMutation.isLoading,
  };
};

export default useActions;
