import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = () => axios.get(API_URLS.USERS);

export const useGetUsers = (opts = {}) =>
  useQuery([QUERY_KEYS.GET_USERS], queryFn, opts);
