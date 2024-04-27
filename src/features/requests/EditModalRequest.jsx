import { useForm } from "react-hook-form";
import { useDeleteRequest } from "./useDeleteRequest";
import { useUpdateRequest } from "./useUpdateRequest";
import { FaRegTrashAlt, FaRegEdit, FaCalendarAlt } from "react-icons/fa";

import Modal from "../../ui/Modal";
import ButtonIcon from "../../ui/ButtonIcon";

function EditModalRequest({ curModal, closeModal }) {
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
          <span className="input">
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
          <span className="input">
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
          <FaCalendarAlt /> start:
          <span className="input">
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
          <FaCalendarAlt /> end:
          <span className="input">
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
          <span className="input">
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
          <ButtonIcon
            icon={<FaRegEdit />}
            className="modal__content-button--aprove button-modal"
            type="submit"
            disabled={isUpdate}
            onClick={() => {
              closeModal();
              handleSubmit(onSubmit)();
            }}
          />

          <ButtonIcon
            icon={<FaRegTrashAlt />}
            className="modal__content-button--deny button-modal"
            disabled={isDeleting}
            onClick={() => {
              closeModal();
              deleteRequest(curModal.id);
            }}
          />
        </>
      }
    />
  );
}

export default EditModalRequest;
