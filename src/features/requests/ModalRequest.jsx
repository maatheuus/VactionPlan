import { useForm } from "react-hook-form";
import { useDeleteRequest } from "./useDeleteRequest";
import { useUpdateRequest } from "./useUpdateRequest";
import { FaRegTrashAlt, FaRegEdit, FaCalendarAlt } from "react-icons/fa";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function ModalRequest({ curModal, closeModal }) {
  const { userName, location, startDate, endDate, observation, id } = curModal;

  const { isDeleting, deleteRequest } = useDeleteRequest();
  const { isUpdate, updateRequest } = useUpdateRequest();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName,
      location,
      startDate,
      endDate,
      observation,
      id,
    },
  });

  const onSubmit = (data) => {
    updateRequest({
      newRequestData: data,
      id: data.id,
    });

    if (!isUpdate) closeModal();
  };

  return (
    <Modal
      close={closeModal}
      name={
        <>
          UserName:{" "}
          <span className="modal__name--span input">
            <input
              disabled={isUpdate}
              type="text"
              {...register("userName", {
                value: userName,
              })}
            />
          </span>
        </>
      }
      location={
        <>
          Location:{" "}
          <span className="modal__location--span input">
            <input
              disabled={isUpdate}
              type="text"
              {...register("location", {
                value: location,
              })}
            />
          </span>
        </>
      }
      dateStart={
        <>
          <p>
            <FaCalendarAlt /> start:
          </p>
          <span className="modal__date--start input">
            <input
              disabled={isUpdate}
              type="date"
              {...register("startDate", {
                value: startDate,
              })}
            />
          </span>
        </>
      }
      dateEnd={
        <>
          <p>
            <FaCalendarAlt /> end:
          </p>{" "}
          <span className="modal__date--end input">
            <input
              disabled={isUpdate}
              type="date"
              {...register("endDate", {
                value: endDate,
              })}
            />
          </span>
        </>
      }
      observations={
        <>
          Observation:{" "}
          <span className="modal__observation--span input">
            <input
              disabled={isUpdate}
              type="text"
              {...register("observation", {
                value: observation,
              })}
            />
          </span>
        </>
      }
      buttons={
        <>
          <Button
            className="modal__content-buttons--aprove button-modal"
            type="submit"
            disabled={isUpdate}
            onClick={() => {
              closeModal();
              handleSubmit(onSubmit)();
            }}
          >
            <FaRegEdit />
          </Button>
          <Button
            className="modal__content-buttons--deny button-modal"
            disabled={isDeleting}
            onClick={() => {
              closeModal();
              deleteRequest(curModal.id);
            }}
          >
            <FaRegTrashAlt />
          </Button>
        </>
      }
    />
  );
}

export default ModalRequest;
