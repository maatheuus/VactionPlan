import { useReducer, createContext } from "react";
import supabase from "../../supabase";

function authDispatch(state, action) {
  if (action.type === "LOGIN" && action.whoWasLogin === "approve") {
    return {
      ...state,
      whoWasLogin: action.whoWasLogin,
      isAuthenticated: true,
    };
  }
  if (action.type === "LOGIN" && action.whoWasLogin === "employee") {
    return {
      ...state,
      whoWasLogin: action.whoWasLogin,
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
    whoWasLogin: null,
    isAuthenticated: false,
    user: undefined,
  });

  async function handleLoginUser(email, password, whoWasLogin) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error?.status === 400) console.log(error);

    dispatch({
      type: "LOGIN",
      whoWasLogin: whoWasLogin,
    });
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

    dispatch({
      type: "SING_UP",
      user: data.user.user_metadata.user_name,
    });

    if (error?.status === 400) return;
  }
  function handleLogout() {
    dispatch({
      type: "LOGOUT",
    });
  }

  const ctxValue = {
    whoWasLogin: state.whoWasLogin,
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
