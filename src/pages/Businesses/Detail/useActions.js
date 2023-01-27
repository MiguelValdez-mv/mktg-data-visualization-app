import { format } from "date-fns";
import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { USER_ROLES } from "@/constants";
import { COPY } from "@/copy";
import { useGetBusinessById } from "@/hooks/businesses/useGetBusinessById";
import { useUpdateBusinessById } from "@/hooks/businesses/useUpdateBusinessById";
import { useAlert } from "@/hooks/useAlert";
import { useGetUsers } from "@/hooks/users/useGetUsers";

const useActions = () => {
  const { businessId } = useParams();
  const queryToGetBusinessDetail = useGetBusinessById(businessId);
  const queryToGetOwners = useGetUsers({ role: USER_ROLES.OWNER });
  const businessUpdateMutation = useUpdateBusinessById();
  const navigate = useNavigate();
  const alert = useAlert();

  const { data: business = {} } = queryToGetBusinessDetail;
  const { name, type, description, avatar, createdAt } = business;

  const { data: owners = [] } = queryToGetOwners;
  const owner = useMemo(
    () => owners.find(({ _id }) => _id === business.ownerId),
    [business, owners]
  );

  const businessRegistrationDate = format(
    createdAt ? new Date(createdAt) : new Date(),
    "PPPP"
  );
  const initialValues = {
    name,
    type,
    description,
    owner,
    avatar,
  };

  const handleBusinessUpdateFormSubmit = ({ owner: ownerInput, ...rest }) => {
    const values = {
      ownerId: ownerInput._id,
      ...rest,
    };

    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));

    businessUpdateMutation.mutate(
      { id: businessId, formData },
      {
        onSuccess: () => {
          navigate("/businesses");
          alert.success(COPY["businesses.detail.update.success"]);
        },
        onError: (err) => alert.error(err.message),
      }
    );
  };

  return {
    isLoading: queryToGetBusinessDetail.isLoading || queryToGetOwners.isLoading,
    isUpdatingBusiness: businessUpdateMutation.isLoading,
    owners,
    businessRegistrationDate,
    initialValues,
    handleBusinessUpdateFormSubmit,
  };
};

export default useActions;
