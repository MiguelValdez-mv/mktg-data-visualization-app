import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";
import { useAuth } from "@/hooks/auth/useAuth";

const select = ({ data }) => data;

const mutationFn = ({ id, formData }) =>
  axios.put(API_URLS.USER_BY_ID(id), formData);

export const useUpdateUserById = (opts) => {
  const queryClient = useQueryClient();
  const authCtx = useAuth();

  return useMutation({
    select,
    ...opts,
    mutationFn,
    onSuccess: (res) => {
      const { data: updatedUser } = res;

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });

      if (authCtx.user._id === updatedUser._id) {
        authCtx.setUser(updatedUser);
      }

      opts?.onSuccess?.(res);
    },
  });
};
