import { useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import { useDeleteRequest } from "./useDeleteRequest";
import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";

import EditFormRequest from "./EditFormRequest";
function ModalRequest({ curModal, closeModal }) {
  const [isEdit, setIsEdit] = useState(false);
  const { isDeleting, deleteRequest } = useDeleteRequest();

  const { userName, location, startDate, endDate, observation } = curModal;

  return !isEdit ? (
    <Modal
      close={closeModal}
      curModal={curModal}
      userName={userName}
      location={location}
      startDate={startDate}
      endDate={endDate}
      observation={observation}
      buttons={
        <>
          <ButtonIcon
            icon={<FaRegEdit />}
            className="modal__content-button--aprove button-modal"
            type="submit"
            onClick={() => setIsEdit(!isEdit)}
          />

          <ButtonIcon
            icon={<FaRegTrashAlt />}
            className="modal__content-button--deny button-modal"
            disabled={isDeleting}
            onClick={() => deleteRequest(curModal)}
          />
        </>
      }
    />
  ) : (
    <EditFormRequest closeModal={closeModal} curModal={curModal} />
  );
}

export default ModalRequest;
