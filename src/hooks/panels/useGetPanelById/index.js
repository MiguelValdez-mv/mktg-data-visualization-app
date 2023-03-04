import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const queryFn = ({ queryKey: [, id] }) => axios.get(API_URLS.PANEL_BY_ID(id));

export const useGetPanelById = ({ id, ...opts }) =>
  useQuery({ select, ...opts, queryKey: [QUERY_KEYS.PANELS, id], queryFn });
