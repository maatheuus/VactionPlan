import { useContext } from "react";
import { updateRequest } from "../apiTable";
import { ModalContext } from "./context/modal-context";
import Button from "./Button";

function ModalApprove({ isHidden = true, onClick, curModal }) {
  const { hiddenModal, viewSelected } = useContext(ModalContext);

  const { userName, location, startDate, endDate, observation, id } = curModal;

  function handleApproveRequests() {
    hiddenModal("hidden");
    if (!viewSelected === id) return;
    updateRequest({ statusRequest: "approve" }, id);
  }
  function handleDenyRequests() {
    hiddenModal("hidden");
    if (!viewSelected === id) return;
    updateRequest({ statusRequest: "denied" }, id);
  }

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
        <h2 className="modal__title">Vacation</h2>
        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text">
              Name: <span className="modal__name--span ">{userName}</span>
            </p>
          </div>
          <div className="modal__location">
            <p className="modal__location--text">
              Location:{" "}
              <span className="modal__location--span ">{location}</span>
            </p>
          </div>

          <div className="modal__date">
            <p className="modal__date--text">
              Date requested:{" "}
              <span className="modal__date--start ">start: {startDate}</span>
              <span className="modal__date--end ">end: {endDate}</span>
            </p>
          </div>
          <div className="modal__observation">
            <p className="modal__observation--text">
              Observation:{" "}
              <span className="modal__observation--span">
                {observation === null ? "Any observation" : observation}
              </span>
            </p>
          </div>
        </div>
        <div className="modal__content-buttons button-modal">
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
