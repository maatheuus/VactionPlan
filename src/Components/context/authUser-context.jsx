import { useReducer, createContext } from "react";
import supabase from "../../supabase";

function authDispatch(state, action) {
  if (action.type === "LOGIN" && action.user === "approve") {
    return {
      ...state,
      user: action.user,
      isAuthenticated: true,
    };
  }
  if (action.type === "LOGIN" && action.user === "employee") {
    return {
      ...state,
      user: action.user,
      isAuthenticated: true,
    };
  }
  if (action.type === "SING_UP") {
    return {
      ...state,
      isAuthenticated: true,
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
  login: () => {},
  singUp: () => {},
  logout: () => {},
});
export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authDispatch, {
    user: null,
    isAuthenticated: false,
  });

  async function handleLoginUser(email, password, user) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error?.status === 400) return;

    dispatch({
      type: "LOGIN",
      user: user,
    });
  }

  async function handleSingUp(email, password) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error?.status === 400) return;

    dispatch({
      type: "SING_UP",
    });
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
