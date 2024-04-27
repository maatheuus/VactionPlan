import { useContext } from "react";
import { ModalContext } from "../../context/modal-context";

import Card from "../../ui/Card";
import { useRequests } from "./useRequests";
import Spinner from "../../ui/Spinner";

export default function ReadRequests({ currentPage }) {
  const { clickView } = useContext(ModalContext);

  const { isLoading, requests } = useRequests();

  if (isLoading) return <Spinner />;

  return (
    <div className="content-cards">
      {requests.length === 0 && (
        <p className="no-requests">No request yet...</p>
      )}
      {requests.map((value) => {
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
    </div>
  );
}
