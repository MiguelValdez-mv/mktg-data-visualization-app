import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useDeleteBusinesses } from "@/hooks/businesses/useDeleteBusinesses";
import { useGetBusinessesByUserId } from "@/hooks/businesses/useGetBusinessesByUserId";
import { useAlert } from "@/hooks/useAlert";
import { isUserAdmin } from "@/utils/isUserAdmin";

const useActions = () => {
  const { user } = useAuth();
  const queryToGetBusiness = useGetBusinessesByUserId(user._id);
  const deleteBusinessesMutation = useDeleteBusinesses();
  const alert = useAlert();

  const deleteBusinesses = (businesses) => {
    const businessIds = businesses.map(({ _id }) => _id);

    deleteBusinessesMutation.mutate(businessIds, {
      onSuccess: () => alert.success(COPY["businesses.removal.success"]),
      onError: (err) => alert.error(err.message),
    });
  };

  return {
    showBusinessCreationBtn: isUserAdmin(user),
    isLoading: queryToGetBusiness.isLoading,
    businesses: queryToGetBusiness.data,
    deleteBusinesses,
    isDeletingBusinesses: deleteBusinessesMutation.isLoading,
  };
};

export default useActions;
