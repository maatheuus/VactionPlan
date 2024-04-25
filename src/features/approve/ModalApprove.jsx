import { useUpdateRequest } from "../requests/useUpdateRequest";
import { FaCalendarAlt } from "react-icons/fa";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function ModalApprove({ curModal, closeModal }) {
  const { updateRequest } = useUpdateRequest();

  const { userName, location, startDate, endDate, observation, id } = curModal;

  return (
    <Modal
      close={closeModal}
      name={
        <>
          {" "}
          Name: <span className="modal__name--span ">{userName}</span>
        </>
      }
      location={
        <>
          Location: <span className="modal__location--span ">{location}</span>
        </>
      }
      dateStart={
        <>
          {" "}
          <FaCalendarAlt />
          start: {startDate}
        </>
      }
      dateEnd={
        <>
          <FaCalendarAlt />
          end: {endDate}
        </>
      }
      observations={
        <>
          {" "}
          Observation:{" "}
          <span className="modal__observation--span">
            {observation === "" ? "Any observation" : observation}
          </span>
        </>
      }
      buttons={
        <>
          <Button
            className="modal__content-buttons--aprove button-modal"
            onClick={() => {
              updateRequest({
                newRequestData: {
                  statusRequest: "approve",
                },
                id,
              });
              closeModal();
            }}
          >
            Approve
          </Button>
          <Button
            className="modal__content-buttons--deny button-modal"
            onClick={() => {
              updateRequest({
                newRequestData: {
                  statusRequest: "denied",
                },
                id,
              });
              closeModal();
            }}
          >
            Deny
          </Button>
        </>
      }
    />
  );
}

export default ModalApprove;
