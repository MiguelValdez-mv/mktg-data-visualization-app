import { createContext, useReducer, useMemo } from "react";

import { PROP } from "@/constants";
import { useDoesSessionExist } from "@/hooks/auth/useDoesSessionExist";

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
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
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
  const setUser = (user) => dispatch({ type: "SET_USER", payload: { user } });

  const { isLoading: isCheckingSession } = useDoesSessionExist({
    staleTime: Infinity,
    onSuccess: ({ sessionExist, user }) => sessionExist && login(user),
  });

  const value = useMemo(
    () => ({ ...state, isCheckingSession, login, logout, setUser }),
    [state, isCheckingSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
