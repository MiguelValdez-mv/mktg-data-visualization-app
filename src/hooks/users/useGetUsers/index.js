import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = ({ queryKey: [, params] }) =>
  axios.get(API_URLS.USERS, { params });

const select = ({ data }) => data;

export const useGetUsers = (params = {}, opts = {}) =>
  useQuery([QUERY_KEYS.USERS, params], queryFn, {
    select,
    ...opts,
  });
