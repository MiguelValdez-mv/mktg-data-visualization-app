import { createContext, useReducer, useMemo } from "react";

import { PROP } from "@/constants";

const reducer = (state, action) => {
  switch (action) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
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

  const login = (user) => dispatch({ type: "LOGIN", payload: { user } });
  const logout = () => dispatch({ type: "LOGOUT" });

  const value = useMemo(() => ({ ...state, login, logout }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
