import axios from "axios";
import { useMutation } from "react-query";

import { API_URLS } from "@/constants";

const mutationFn = (data) => axios.post(API_URLS.REPORTS, data);

export const useCreateReport = (opts) => useMutation({ ...opts, mutationFn });
