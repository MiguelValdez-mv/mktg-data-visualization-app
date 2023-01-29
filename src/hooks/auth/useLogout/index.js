import { useMutation, useQueryClient } from "react-query";
import Session from "supertokens-web-js/recipe/session";

import { QUERY_KEYS } from "@/constants";
import { useAuth } from "@/hooks/auth/useAuth";

const mutationFn = () => Session.signOut();

export const useLogout = (opts) => {
  const queryClient = useQueryClient();
  const authCtx = useAuth();

  return useMutation({
    ...opts,
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.DOES_SESSION_EXIST]);
      authCtx.logout();
      opts?.onSuccess?.();
    },
  });
};
