import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (ids) =>
  axios.delete(API_URLS.USERS, { params: { ids: ids.join(",") } });

export const useDeleteUsers = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
      opts?.onSuccess?.(res);
    },
  });
};
