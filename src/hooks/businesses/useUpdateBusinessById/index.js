import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = ({ id, formData }) =>
  axios.put(API_URLS.BUSINESS_BY_ID(id), formData);

const select = ({ data }) => data;

export const useUpdateBusinessById = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: ({ data: updatedBusiness }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BUSINESSES] });
      opts.onSuccess?.(updatedBusiness);
    },
  });
};
