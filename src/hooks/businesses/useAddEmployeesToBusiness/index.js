import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = ({ businessId, employeeIds }) =>
  axios.put(API_URLS.BUSINESS_EMPLOYEES(businessId), { employeeIds });

export const useAddEmployeesToBusiness = (opts) => {
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
