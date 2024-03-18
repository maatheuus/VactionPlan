import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./context/modal-context";
import { useNavigate } from "react-router-dom";
import { readRequest } from "../apiTable";
import Card from "./Card";

export default function ReadRequests({ currentPage }) {
  const { clickView } = useContext(ModalContext);
  const [userRequest, setUserRequest] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    readRequest().then((data) => setUserRequest(data));
  }, [navigate]);

  return (
    <div className="content-cards">
      {userRequest.map((value) => {
        return (
          <Card
            key={value.id}
            title="Vacation"
            curRequest={value}
            onClick={() => clickView(currentPage, value.id)}
          />
        );
      })}
    </div>
  );
}
