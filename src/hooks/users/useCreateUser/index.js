import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const mutationFn = (data) => axios.post(API_URLS.USERS, data);

export const useCreateUser = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    select,
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
      opts?.onSuccess?.(res);
    },
  });
};
