import { createContext, useReducer, useMemo } from "react";

import { PROP } from "@/constants";
import { useDoesSessionExist } from "@/hooks/useDoesSessionExist";

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

  const login = (user) => dispatch({ type: "LOGIN", payload: { user } });
  const logout = () => dispatch({ type: "LOGOUT" });

  const { isLoading: isCheckingSession } = useDoesSessionExist({
    onSuccess: ({ sessionExist, user }) => {
      const { isLoggedIn } = state;

      if (sessionExist) login(user);
      else if (isLoggedIn) logout();
    },
  });

  const value = useMemo(
    () => ({ ...state, isCheckingSession, login, logout }),
    [state, isCheckingSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PROP.CHILDREN.isRequired,
};
