import { FaCalendarAlt } from "react-icons/fa";
import { useUpdateRequest } from "../requests/useUpdateRequest";
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
          Name: <span>{userName}</span>
        </>
      }
      location={
        <>
          Location: <span>{location}</span>
        </>
      }
      dateStart={
        <>
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
          Observation:{" "}
          <span>{observation === "" ? "Any observation" : observation}</span>
        </>
      }
      buttons={
        <>
          <Button
            className="modal__content-button--aprove button-modal"
            onClick={() => {
              updateRequest({
                newRequestData: { statusRequest: "approve" },
                id,
              });
              closeModal();
            }}
          >
            Approve
          </Button>
          <Button
            className="modal__content-button--deny button-modal"
            onClick={() => {
              updateRequest({
                newRequestData: { statusRequest: "denied" },
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
