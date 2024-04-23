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
  if (action.type === "ALL_REQUESTS") {
    return {
      ...state,
      allRequests: action.requests,
    };
  }
  return state;
}

export const FilterContext = createContext({
  showCardStatus: "",
  requests: "",
  displayedCardStatus: () => {},
  allUserRequests: () => {},
});

function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterRequests, {
    card: "",
    allRequests: "",
  });

  function handleDisplayedCard(card) {
    dispatch({
      type: "SHOW_CARD",
      curCard: card,
    });
  }

  function handleAllRequests(allRequests) {
    dispatch({
      type: "ALL_REQUESTS",
      requests: allRequests,
    });
  }

  const ctxValue = {
    showCardStatus: state.card,
    requests: state.allRequests,
    allUserRequests: handleAllRequests,
    displayedCardStatus: handleDisplayedCard,
  };
  return (
    <FilterContext.Provider value={ctxValue}>{children}</FilterContext.Provider>
  );
}

export default FilterProvider;
