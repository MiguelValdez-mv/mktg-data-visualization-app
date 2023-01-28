import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (ids) =>
  axios.delete(API_URLS.BUSINESSES, { params: { ids: ids.join(",") } });

const select = ({ data }) => data;

export const useDeleteBusinesses = (opts = {}) => {
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
