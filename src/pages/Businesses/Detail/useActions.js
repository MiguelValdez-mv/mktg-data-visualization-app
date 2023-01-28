import { format } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";

import { USER_ROLES, BUSINESS_TYPES } from "@/constants";
import { COPY } from "@/copy";
import { useAuth } from "@/hooks/auth/useAuth";
import { useAddEmployeesToBusiness } from "@/hooks/businesses/useAddEmployeesToBusiness";
import { useDeleteBusinessEmployees } from "@/hooks/businesses/useDeleteBusinessEmployees";
import { useGetBusinessById } from "@/hooks/businesses/useGetBusinessById";
import { useUpdateBusinessById } from "@/hooks/businesses/useUpdateBusinessById";
import { useAlert } from "@/hooks/useAlert";
import { useGetUsers } from "@/hooks/users/useGetUsers";
import { isAdminUser } from "@/utils/checkUserRole";

const useActions = () => {
  const { businessId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const alert = useAlert();

  const queryToGetBusinessDetail = useGetBusinessById(businessId);
  const {
    data: {
      name,
      type,
      description,
      ownerId,
      employeeIds,
      avatar,
      createdAt,
    } = {},
  } = queryToGetBusinessDetail;

  const queryToGetEmployees = useGetUsers(
    { role: USER_ROLES.EMPLOYEE },
    {
      enabled: !!employeeIds,
      select: ({ data: employees }) =>
        employees.reduce(
          (acum, curr) => {
            const key = employeeIds.includes(curr._id)
              ? "businessEmployees"
              : "nonBusinessEmployees";

            return {
              ...acum,
              [key]: [...acum[key], curr],
            };
          },
          {
            businessEmployees: [],
            nonBusinessEmployees: [],
          }
        ),
    }
  );
  const { data: { businessEmployees, nonBusinessEmployees } = {} } =
    queryToGetEmployees;

  const queryToGetOwners = useGetUsers(
    { role: USER_ROLES.OWNER },
    {
      enabled: !!ownerId,
      select: ({ data: owners }) => ({
        businessOwner: owners.find((o) => o._id === ownerId),
        owners,
      }),
    }
  );
  const { data: { businessOwner, owners } = {} } = queryToGetOwners;

  const businessUpdateMutation = useUpdateBusinessById();

  const employeeAdditionMutation = useAddEmployeesToBusiness();
  const employeeDeletionMutation = useDeleteBusinessEmployees();

  const isLoading = [
    queryToGetBusinessDetail.isLoading,
    queryToGetEmployees.isLoading,
    queryToGetOwners.isLoading,
  ].includes(true);

  const businessRegistrationDate = format(
    createdAt ? new Date(createdAt) : new Date(),
    "PPPP"
  );

  const initialValues = {
    name: name ?? "",
    type: type ?? BUSINESS_TYPES.SERVICE,
    description: description ?? "",
    owner: businessOwner,
    avatar: avatar ?? "",
  };

  const onError = (err) => alert.error(err.message);

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
        onError,
      }
    );
  };

  const addEmployeeToBusiness = (employee) => {
    employeeAdditionMutation.mutate(
      { businessId, employeeIds: [employee._id] },
      {
        onSuccess: () =>
          alert.success(COPY["businesses.detail.employeeAddition.success"]),
        onError,
      }
    );
  };
  const deleteBusinessEmployees = (employees) => {
    employeeDeletionMutation.mutate(
      {
        businessId,
        employeeIds: employees.map(({ _id }) => _id),
      },
      {
        onSuccess: () =>
          alert.success(COPY["businesses.detail.employeeDeletion.success"]),
        onError,
      }
    );
  };

  return {
    businessEmployees,
    nonBusinessEmployees,
    owners,
    isUpdatingBusiness: businessUpdateMutation.isLoading,
    isLoading,
    businessRegistrationDate,
    initialValues,
    handleBusinessUpdateFormSubmit,
    addEmployeeToBusiness,
    deleteBusinessEmployees,
    showAddEmployeeBtn: isAdminUser(user),
  };
};

export default useActions;
