import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./context/modal-context";
import { readRequest, realTimeData } from "../apiTable";
import { FaSpinner } from "react-icons/fa";
import Card from "./Card";

export default function ReadRequests({ currentPage }) {
  const { clickView } = useContext(ModalContext);
  const [userRequest, setUserRequest] = useState([]);

  // RE-RENDER UI when user deleted a request
  useEffect(() => {
    realTimeData("DELETE", (payload) => {
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

  // read all the users requests
  useEffect(() => {
    readRequest().then((data) => setUserRequest(data));
  }, []);

  // RE-RENDER UI when user make a new request
  useEffect(() => {
    realTimeData("INSERT", (payload) => {
      const { new: newData } = payload;
      console.log("payload", payload);

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
      {/* <FaSpinner className="spinner" /> */}
      {userRequest.length > 0 ? (
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
        })
      ) : (
        <p className="no-requests">No request yet...</p>
      )}
    </div>
  );
}
