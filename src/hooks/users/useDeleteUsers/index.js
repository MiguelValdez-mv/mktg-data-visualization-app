import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (users) => {
  const ids = users.map(({ _id }) => _id).join(",");
  return axios.delete(API_URLS.USERS, { params: { ids } });
};

const select = ({ data }) => data;

export const useDeleteUsers = (opts = {}) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: ({ data: result }) => {
      queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      opts.onSuccess?.(result);
    },
  });
};
