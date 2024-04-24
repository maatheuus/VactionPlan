import { useContext } from "react";
import { ModalContext } from "../context/modal-context";
import { useUpdateRequest } from "../hooks/useUpdateRequest";

import { FaCalendarAlt, FaRegWindowClose } from "react-icons/fa";

import Button from "./Button";

function ModalApprove({ isHidden = true, onClick, curModal }) {
  const { isUpdate, updateRequest } = useUpdateRequest();

  const { hiddenModal } = useContext(ModalContext);

  const { userName, location, startDate, endDate, observation, id } = curModal;

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
        <Button
          onClick={onClick}
          className="modal__content-button--close button-modal"
        >
          <FaRegWindowClose />
        </Button>

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
              <FaCalendarAlt />
              start: {startDate}
            </p>
            <p className="modal__date--text maven-pro">
              <FaCalendarAlt />
              end: {endDate}
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
          <div className="buttons">
            <Button
              className="modal__content-buttons--aprove button-modal"
              onClick={() => {
                hiddenModal("hidden");
                updateRequest({
                  newRequestData: {
                    statusRequest: "approve",
                  },
                  id,
                });
              }}
            >
              {isUpdate ? "Approving" : "Approve"}
            </Button>
            <Button
              className="modal__content-buttons--deny button-modal"
              onClick={() => {
                hiddenModal("hidden");
                updateRequest({
                  newRequestData: {
                    statusRequest: "denied",
                  },
                  id,
                });
              }}
            >
              {isUpdate ? "Denying" : "Deny"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalApprove;
