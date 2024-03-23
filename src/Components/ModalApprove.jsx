import { useContext, useEffect, useState } from "react";
import { updateRequest } from "../apiTable";
import { ModalContext } from "./context/modal-context";
import Button from "./Button";

function ModalApprove({ isHidden = true, onClick, curModal }) {
  const [approveRequest, setApproveRequest] = useState(false);
  const [denyRequest, setDenyRequest] = useState(false);
  const { hiddenModal, viewSelected } = useContext(ModalContext);

  const { userName, location, startDate, endDate, observation, id } = curModal;

  function handleApproveRequests() {
    hiddenModal("hidden");
    setApproveRequest(true);
  }
  function handleDenyRequests() {
    hiddenModal("hidden");
    setDenyRequest(true);
  }
  useEffect(() => {
    if (!viewSelected === id && approveRequest) return;
    updateRequest({ statusRequest: "approve" }, id);
  }, [approveRequest, id, viewSelected]);

  useEffect(() => {
    if (!viewSelected === id && denyRequest) return;
    updateRequest({ statusRequest: "denied" }, id);
  }, [denyRequest, id, viewSelected]);

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
        <h2 className="modal__title maven-pro ">Vacation</h2>
        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text maven-pro">
              Name: <span className="modal__name--span ">{userName}</span>
            </p>
          </div>
          <div className="modal__location">
            <p className="modal__location--text maven-pro">
              Location:{" "}
              <span className="modal__location--span ">{location}</span>
            </p>
          </div>

          <div className="modal__date">
            <p className="modal__date--text maven-pro">
              Date requested:{" "}
              <span className="modal__date--start ">start: {startDate}</span>
              <span className="modal__date--end ">end: {endDate}</span>
            </p>
          </div>
          <div className="modal__observation">
            <p className="modal__observation--text maven-pro">
              Observation:{" "}
              <span className="modal__observation--span">
                {observation === "" ? "Any observation" : observation}
              </span>
            </p>
          </div>
        </div>
        <div className="modal__content-buttons button-modal  maven-pro">
          <div className="modal__content-button ">
            <Button
              onClick={onClick}
              className="modal__content-button--close button-modal"
            >
              Close
            </Button>
          </div>

          <div className="buttons">
            <Button
              className="modal__content-buttons--aprove button-modal"
              onClick={handleApproveRequests}
            >
              Approve
            </Button>
            <Button
              className="modal__content-buttons--deny button-modal"
              onClick={handleDenyRequests}
            >
              Deny
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalApprove;
