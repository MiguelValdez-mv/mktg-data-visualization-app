import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (data) => axios.post(API_URLS.PANELS, data);

export const useCreatePanel = (opts) => {
  const queryClient = useQueryClient();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PANELS] });
      opts?.onSuccess?.(res);
    },
  });
};
