import { createContext, useMemo, useReducer } from "react";

import { PROP } from "@/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const initialState = {
  user: undefined,
  isLoggedIn: false,
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
