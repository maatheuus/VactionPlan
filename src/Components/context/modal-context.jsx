import { useReducer, createContext } from "react";

function modalDispatch(state, action) {
  if (action.type === "VIEW" && action.page === "request") {
    return {
      ...state,
      isHidden: !state.isHidden,
      view: action.viewSelected,
      page: action.page,
    };
  }
  if (action.type === "VIEW" && action.page === "approve") {
    return {
      ...state,
      isHidden: !state.isHidden,
      view: action.viewSelected,
      page: action.page,
    };
  }

  if (action.type === "HIDDEN_MODAL" && action.page === "hidden") {
    return {
      ...state,
      isHidden: !state.isHidden,
    };
  }
  if (action.type === "HIDDEN_MENU" && action.page === "hidden") {
    return {
      ...state,
      menuIsHidden: !state.menuIsHidden,
    };
  }
  return state;
}

export const ModalContext = createContext({
  viewSelected: null,
  page: null,
  isHidden: Boolean,
  clickView: () => {},
  hiddenModal: () => {},
  hiddenMenu: () => {},
});

export default function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalDispatch, {
    isHidden: true,
    menuIsHidden: true,
    view: null,
    page: null,
  });

  function handleClickView(e, id = undefined) {
    dispatch({
      type: "VIEW",
      page: e,
      viewSelected: id,
    });
  }

  function handleHiddenModal(e) {
    dispatch({
      type: "HIDDEN_MODAL",
      page: e,
    });
  }
  function handleHiddenMenu(e) {
    dispatch({
      type: "HIDDEN_MENU",
      page: e,
    });
  }

  const ctxValue = {
    isHidden: state.isHidden,
    menuIsHidden: state.menuIsHidden,
    page: state.page,
    viewSelected: state.view,
    clickView: handleClickView,
    hiddenModal: handleHiddenModal,
    hiddenMenu: handleHiddenMenu,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
}
