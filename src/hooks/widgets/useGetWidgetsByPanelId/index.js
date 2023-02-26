import axios from "axios";
import { useQuery } from "react-query";

import { API_URLS, QUERY_KEYS } from "@/constants";

const select = ({ data }) => data;

const queryFn = ({ queryKey: [, id] }) =>
  axios.get(API_URLS.WIDGETS_BY_PANEL_ID(id));

export const useGetWidgetsByPanelId = ({ id, ...opts }) =>
  useQuery({ select, ...opts, queryKey: [QUERY_KEYS.WIDGETS, id], queryFn });
