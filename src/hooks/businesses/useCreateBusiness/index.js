import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const mutationFn = (data) => axios.post(API_URLS.BUSINESSES, data);

export const useCreateBusiness = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    select,
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BUSINESSES] });
      opts?.onSuccess?.(res);
    },
  });
};
