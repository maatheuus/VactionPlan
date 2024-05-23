import { useReducer, createContext } from "react";

function menuDispatch(state, action) {
  if (action.type === "SHOW_MENU") {
    return {
      ...state,
      isVisibleMenu: !state.isVisibleMenu,
    };
  }

  return state;
}

export const MenuContext = createContext({
  isVisibleMenu: false,
  showMenu: () => {},
});

export default function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(menuDispatch, {
    isVisibleMenu: false,
  });

  function handleShowMenu() {
    dispatch({
      type: "SHOW_MENU",
      isVisibleMenu: true,
    });
  }

  const ctxValue = {
    isVisibleMenu: state.isVisibleMenu,
    showMenu: handleShowMenu,
  };

  return (
    <MenuContext.Provider value={ctxValue}>{children}</MenuContext.Provider>
  );
}
