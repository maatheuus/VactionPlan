import { createContext, useReducer } from "react";

function filterRequests(state, action) {
  if (action.type === "SHOW_CARD" && action.curCard === "all") {
    return {
      ...state,
      card: action.curCard,
    };
  }
  if (action.type === "SHOW_CARD" && action.curCard === "approve") {
    return {
      ...state,
      card: action.curCard,
    };
  }
  if (action.type === "SHOW_CARD" && action.curCard === "denied") {
    return {
      ...state,
      card: action.curCard,
    };
  }
  if (action.type === "SHOW_CARD" && action.curCard === "pending") {
    return {
      ...state,
      card: action.curCard,
    };
  }
  return state;
}

export const FilterContext = createContext({
  showCardStatus: "",
  displayedCardStatus: () => {},
});

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterRequests, {
    card: "",
  });

  function handleDisplayedCard(card) {
    dispatch({
      type: "SHOW_CARD",
      curCard: card,
    });
  }

  const ctxValue = {
    showCardStatus: state.card,
    displayedCardStatus: handleDisplayedCard,
  };
  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
