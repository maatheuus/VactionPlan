import { useReducer, createContext } from "react";
import supabase from "../../supabase";

async function requestDispatch(state, action) {
  if (action.type === "NEW_REQUEST") {
    const { error, data } = await supabase
      .from("VactionUsers")
      .insert([action.requestUser]);

    return {
      ...state,
      newRequestsData: data,
      errorAddRequest: error,
    };
  }
  if (action.type === "UPDATE_REQUEST") {
    const { error } = await supabase
      .from("VactionUsers")
      .update(action.update)
      .eq("id", action.idRequest);

    return {
      ...state,
      errorUpdateRequest: error,
    };
  }
  if (action.type === "DELETE_REQUEST") {
    const { error } = await supabase
      .from("VactionUsers")
      .delete()
      .eq("id", action.idRequest);

    if (error) {
      console.log(error);
      throw new Error("Could not delete request");
    }
    return {
      ...state,
    };
  }
  return state;
}

export const RequestContext = createContext({
  newRequestsData: null,
  errorNewRequest: null,
  errorUpdateRequest: null,
  readRequest: () => {},
  newRequest: () => {},
  updateRequest: () => {},
  deleteRequest: () => {},
});

export default function RequestProvider({ children }) {
  const [state, dispatch] = useReducer(requestDispatch, {
    newRequestsData: null,
    errorAddRequest: null,
    errorUpdateRequest: null,
    deleteRequest: null,
  });

  function handleAddNewRequest(requestUser) {
    dispatch({
      type: "NEW_REQUEST",
      requestUser: requestUser,
    });
  }

  function handleUpdateRequest(updateRequests, idUpdateRequest) {
    dispatch({
      type: "UPDATE_REQUEST",
      update: updateRequests,
      updateId: idUpdateRequest,
    });
  }

  function handleDeleteRequest(idRequest) {
    dispatch({
      type: "DELETE_REQUEST",
      idRequest: idRequest,
    });
  }

  async function handleReadRequests() {
    const { data, error } = await supabase.from("VactionUsers").select("*");

    if (error) console.log("could not read request");

    return data;
  }

  const ctxValue = {
    newRequestsData: state.newRequestsData,
    errorNewRequest: state.errorAddRequest,
    errorUpdateRequest: state.errorUpdateRequest,
    readRequest: handleReadRequests,
    newRequest: handleAddNewRequest,
    updateRequest: handleUpdateRequest,
    deleteRequest: handleDeleteRequest,
  };

  return (
    <RequestContext.Provider value={ctxValue}>
      {children}
    </RequestContext.Provider>
  );
}
