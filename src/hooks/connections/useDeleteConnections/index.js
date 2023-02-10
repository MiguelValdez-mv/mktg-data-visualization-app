import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const mutationFn = (ids) =>
  axios.delete(API_URLS.CONNECTIONS, { params: { ids: ids.join(",") } });

export const useDeleteConnections = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    select,
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CONNECTIONS] });
      opts?.onSuccess?.(res);
    },
  });
};
