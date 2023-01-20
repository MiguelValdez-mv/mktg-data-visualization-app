import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = async ({ queryKey: [, id] }) =>
  axios.get(API_URLS.USER_BY_ID(id));

const select = ({ data }) => data;

export const useGetUserById = (id, opts = {}) =>
  useQuery([QUERY_KEYS.USERS, id], queryFn, { select, ...opts });
