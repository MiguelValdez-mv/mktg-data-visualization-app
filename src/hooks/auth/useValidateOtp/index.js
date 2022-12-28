import { useMutation } from "react-query";
import { consumeCode } from "supertokens-web-js/recipe/passwordless";

const mutationFn = ({ otp }) => consumeCode({ userInputCode: otp });

export const useValidateOtp = (opts = {}) => useMutation(mutationFn, opts);
