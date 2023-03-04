import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = ({ businessId, employeeIds }) =>
  axios.delete(API_URLS.BUSINESS_EMPLOYEES(businessId), {
    params: { employeeIds: employeeIds.join(",") },
  });

export const useDeleteBusinessEmployees = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BUSINESSES] });
      opts?.onSuccess?.(res);
    },
  });
};
