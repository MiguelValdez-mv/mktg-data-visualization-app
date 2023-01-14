import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (formData) => axios.post(API_URLS.USERS, formData);

export const useCreateUser = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    ...opts,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.GET_USERS]);
      opts.onSuccess?.();
    },
  });
};
