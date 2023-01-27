import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (users) => {
  const ids = users.map(({ _id }) => _id).join(",");
  return axios.delete(API_URLS.BUSINESSES, { params: { ids } });
};

const select = ({ data }) => data;

export const useDeleteBusinesses = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: ({ data: result }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BUSINESSES] });
      opts.onSuccess?.(result);
    },
  });
};
