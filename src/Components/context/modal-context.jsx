import { useReducer, createContext } from "react";

function modalDispatch(state, action) {
  if (action.type === "VIEW" && action.page === "request") {
    console.log("request");
    return {
      isHidden: !state.isHidden,
    };
  }
  if (action.type === "VIEW" && action.page === "approve") {
    console.log("approve");
    return {
      isHidden: !state.isHidden,
    };
  }

  if (action.type === "HIDDEN_MODAL" && action.page === "hidden") {
    console.log("hidden");
    return {
      isHidden: !state.isHidden,
    };
  }
  return state;
}

export const ModalContext = createContext({
  curView: "",
  isHidden: Boolean,
  clickView: () => {},
  hiddenModal: () => {},
});

export default function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalDispatch, {
    isHidden: true,
    curView: "",
  });

  function handleClickView(e) {
    dispatch({
      type: "VIEW",
      page: e,
    });
  }

  function handleHiddenModal(e) {
    dispatch({
      type: "HIDDEN_MODAL",
      page: e,
    });
  }

  const ctxValue = {
    isHidden: state.isHidden,
    clickView: handleClickView,
    hiddenModal: handleHiddenModal,
  };

  return (
    <ModalContext.Provider value={ctxValue}>{children}</ModalContext.Provider>
  );
}
