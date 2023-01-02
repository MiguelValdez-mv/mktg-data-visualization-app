import axios from "axios";
import { useQuery } from "react-query";
import Session from "supertokens-web-js/recipe/session";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = async () => {
  const sessionExist = await Session.doesSessionExist();
  let user;

  if (sessionExist) {
    const { data } = await axios.get(
      API_URLS.GET_USER_DETAILS_FROM_SUPERTOKENS_ID
    );
    user = data;
  }

  return Promise.resolve({ sessionExist, user });
};

export const useDoesSessionExist = (opts = {}) =>
  useQuery([QUERY_KEYS.DOES_SESSION_EXIST], queryFn, opts);
