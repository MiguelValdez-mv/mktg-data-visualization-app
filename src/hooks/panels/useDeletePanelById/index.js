import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const mutationFn = (id) => axios.delete(API_URLS.PANEL_BY_ID(id));

export const useDeletePanelById = (opts) => {
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
