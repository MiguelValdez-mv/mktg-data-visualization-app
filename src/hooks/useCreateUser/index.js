import axios from "axios";
import { useMutation } from "react-query";

import { API_URLS } from "@/constants";

const mutationFn = (formData) => axios.post(API_URLS.USERS, formData);

export const useCreateUser = (opts = {}) => useMutation(mutationFn, opts);
