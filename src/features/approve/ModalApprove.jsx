import { useUpdateRequest } from "../requests/useUpdateRequest";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function ModalApprove({ curModal, closeModal }) {
  const { updateRequest } = useUpdateRequest();

  return (
    <Modal
      close={closeModal}
      curModal={curModal}
      userName={<span>{curModal.userName}</span>}
      location={<span>{curModal.location}</span>}
      startDate={<span>{curModal.startDate}</span>}
      endDate={<span>{curModal.endDate}</span>}
      observation={<span>{curModal.observation}</span>}
      buttons={
        <>
          <Button
            className="modal__content-button--aprove button-modal"
            onClick={() => {
              updateRequest({
                newRequestData: { statusRequest: "approve" },
                id: curModal.id,
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
                id: curModal.id,
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
