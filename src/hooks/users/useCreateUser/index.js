import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (formData) => axios.post(API_URLS.USERS, formData);

const select = ({ data }) => data;

export const useCreateUser = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
      opts.onSuccess?.();
    },
  });
};
