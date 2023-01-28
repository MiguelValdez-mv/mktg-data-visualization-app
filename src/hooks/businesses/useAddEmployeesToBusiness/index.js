import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = ({ businessId, employeeIds }) =>
  axios.put(API_URLS.BUSINESS_EMPLOYEES(businessId), { employeeIds });

const select = ({ data }) => data;

export const useAddEmployeesToBusiness = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BUSINESSES] });
      opts.onSuccess?.(res);
    },
  });
};
