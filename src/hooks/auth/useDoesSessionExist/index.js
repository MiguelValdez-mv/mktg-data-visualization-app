import axios from "axios";
import { useQuery } from "react-query";
import Session from "supertokens-web-js/recipe/session";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = async () => {
  const sessionExist = await Session.doesSessionExist();
  let user;

  if (sessionExist) {
    const { data } = await axios.get(API_URLS.USER_BY_SESSION);
    user = data;
  }

  return Promise.resolve({ sessionExist, user });
};

export const useDoesSessionExist = (opts) =>
  useQuery({ ...opts, queryKey: [QUERY_KEYS.DOES_SESSION_EXIST], queryFn });
