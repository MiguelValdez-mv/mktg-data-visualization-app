import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const queryFn = () => axios.get(API_URLS.CONNECTIONS);

export const useGetConnections = (opts) =>
  useQuery({
    select,
    ...opts,
    queryKey: [QUERY_KEYS.CONNECTIONS],
    queryFn,
  });
