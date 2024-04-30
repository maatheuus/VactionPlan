import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { ModalContext } from "../../context/modal-context";
import { useRequests } from "./useRequests";
import Card from "../../ui/Card";
import Spinner from "../../ui/Spinner";

export default function ReadRequests({ currentPage }) {
  const { isLoading, requests } = useRequests();
  const [searchParams] = useSearchParams();

  const { clickView } = useContext(ModalContext);

  const filteredValue = searchParams.get("filtered") || "all";
  let filteredRequests;

  if (filteredValue === "all") filteredRequests = requests;

  if (filteredValue === "approve")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "approve"
    );

  if (filteredValue === "denied")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "denied"
    );

  if (filteredValue === "pendent")
    filteredRequests = requests.filter(
      (request) => request.statusRequest === "pendent"
    );

  if (isLoading) return <Spinner />;

  return (
    <div className="content-cards">
      {requests.length === 0 && (
        <p className="no-requests">No request yet...</p>
      )}
      {filteredRequests.map((value) => {
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
