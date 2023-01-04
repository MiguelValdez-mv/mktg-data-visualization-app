import { useMutation } from "react-query";
import Session from "supertokens-web-js/recipe/session";

const mutationFn = () => Session.signOut();

export const useLogout = (opts = {}) => useMutation(mutationFn, opts);
