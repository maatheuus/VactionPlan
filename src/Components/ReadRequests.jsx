import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./context/modal-context";
import { readRequest, realTimeData } from "../apiTable";
import { FaSpinner } from "react-icons/fa";
import { FilterContext } from "./context/filterRequests-context";

import Card from "./Card";

export default function ReadRequests({ currentPage }) {
  const { clickView } = useContext(ModalContext);
  const { showCardStatus } = useContext(FilterContext);

  const [userRequest, setUserRequest] = useState([]);
  const [removeSpinner, setRemoveSpinner] = useState(false);

  // showing user requests by filtering them
  useEffect(() => {
    readRequest().then((data) => {
      setRemoveSpinner(true);
      setUserRequest(data);
    });
    if (showCardStatus === "all") return;

    if (showCardStatus === "approve") {
      readRequest(true, "approve").then((data) => {
        setUserRequest(data);
        setRemoveSpinner(true);
      });
    }
    if (showCardStatus === "denied") {
      readRequest(true, "denied").then((data) => {
        setUserRequest(data);
        setRemoveSpinner(true);
      });
    }
    if (showCardStatus === "pending") {
      readRequest(true, "pendent").then((data) => {
        setUserRequest(data);
        setRemoveSpinner(true);
      });
    }
  }, [showCardStatus]);

  // RE-RENDER UI when user deleted a request
  useEffect(() => {
    realTimeData("DELETE", (payload) => {
      setRemoveSpinner(true);
      const { old: dataDeleted } = payload;

      const deleteRequest = userRequest.map((userDeletedItem) => {
        if (userDeletedItem.id === dataDeleted.id) {
          return dataDeleted;
        }
        return userDeletedItem;
      });
      setUserRequest(deleteRequest);
    });
  }, [userRequest]);

  // RE-RENDER UI when user make a new request
  useEffect(() => {
    realTimeData("INSERT", (payload) => {
      setRemoveSpinner(true);
      const { new: newData } = payload;

      const checkValue = userRequest.findIndex(
        (userIndex) => userIndex.id === newData.id
      );
      if (checkValue > 0) return;

      setUserRequest(newData);
    });
  }, [userRequest]);

  // RE-RENDER UI when updating the request
  useEffect(() => {
    realTimeData("UPDATE", (payload) => {
      const { new: newData } = payload;

      const newUserRequest = userRequest.map((userRequestItem) => {
        if (userRequestItem.id === newData.id) {
          return newData;
        }

        return userRequestItem;
      });
      setUserRequest(newUserRequest);
    });
  }, [userRequest]);

  return (
    <div className="content-cards">
      {userRequest.length > 0 &&
        userRequest.map((value) => {
          if (value.userName === undefined) return;
          return (
            <Card
              key={value.id}
              title="Vacation"
              curRequest={value}
              onClick={() => clickView(currentPage, value.id)}
            />
          );
        })}
      {!removeSpinner && <FaSpinner className="spinner" />}
      {removeSpinner && userRequest.length === 0 && (
        <p className="no-requests">No request yet...</p>
      )}
    </div>
  );
}
