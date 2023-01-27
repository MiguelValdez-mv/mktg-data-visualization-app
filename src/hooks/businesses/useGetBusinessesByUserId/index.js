import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const queryFn = ({ queryKey: [, id] }) =>
  axios.get(API_URLS.BUSINESSES_BY_USER_ID(id));

const select = ({ data }) => data;

export const useGetBusinessesByUserId = (id, opts = {}) =>
  useQuery([QUERY_KEYS.BUSINESSES, id], queryFn, { select, ...opts });
