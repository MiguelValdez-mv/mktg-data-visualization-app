import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const queryFn = ({ queryKey: [, params = {}] }) =>
  axios.get(API_URLS.USERS, { params });

export const useGetUsers = ({ params, ...opts } = {}) =>
  useQuery({ select, ...opts, queryKey: [QUERY_KEYS.USERS, params], queryFn });
