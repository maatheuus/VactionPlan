import { useReducer, createContext } from "react";

import supabase from "../services/supabase";
import {
  handleErrorsMessages,
  handleSuccessMessages,
} from "../services/toastApi";

function authDispatch(state, action) {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
    };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.user,
    };
  }
  if (action.type === "SING_UP") {
    return {
      ...state,
      isAuthenticated: true,
      user: action.user,
    };
  }
  if (action.type === "LOGOUT") {
    return {
      ...state,
      isAuthenticated: false,
    };
  }
  return state;
}

export const AuthContext = createContext({
  isAuthenticated: false,
  user: undefined,
  login: () => {},
  singUp: () => {},
  logout: () => {},
});
export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authDispatch, {
    isAuthenticated: false,
    user: undefined,
  });

  async function handleLoginUser(email, password) {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      handleErrorsMessages(error.message);
      throw new Error(error.message);
    }
    handleSuccessMessages("Successfully logged in");

    dispatch({
      type: "LOGIN",
    });

    return data;
  }

  async function handleSingUp(email, password, user) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          user_name: user,
        },
      },
    });

    if (error) {
      handleErrorsMessages(error.message);
      throw new Error(error.message);
    }
    handleSuccessMessages("Successfully registered");

    dispatch({
      type: "SING_UP",
      user: data.user.user_metadata.user_name,
    });

    return data;
  }
  function handleLogout() {
    dispatch({
      type: "LOGOUT",
    });
  }

  const ctxValue = {
    user: state.user,
    page: state.page,
    isAuthenticated: state.isAuthenticated,
    login: handleLoginUser,
    logout: handleLogout,
    singUp: handleSingUp,
  };
  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
}
