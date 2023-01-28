import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";
import { useAuth } from "@/hooks/auth/useAuth";

const mutationFn = ({ id, formData }) =>
  axios.put(API_URLS.USER_BY_ID(id), formData);

const select = ({ data }) => data;

export const useUpdateUserById = (opts = {}) => {
  const queryClient = useQueryClient();
  const authCtx = useAuth();

  return useMutation(mutationFn, {
    select,
    ...opts,
    onSuccess: (res) => {
      const { data: updatedUser } = res;

      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });

      if (authCtx.user._id === updatedUser._id) {
        authCtx.setUser(updatedUser);
      }

      opts.onSuccess?.(res);
    },
  });
};
