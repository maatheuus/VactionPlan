import { useForm } from "react-hook-form";
import { useDeleteRequest } from "./useDeleteRequest";
import { useUpdateRequest } from "./useUpdateRequest";
import {
  FaRegTrashAlt,
  FaRegEdit,
  FaHourglassStart,
  FaHourglassEnd,
} from "react-icons/fa";

import Modal from "../../ui/Modal";
import ButtonIcon from "../../ui/ButtonIcon";
import {
  checkDistance,
  formattingDistance,
} from "../../services/formattingDate";
import { handleErrorsMessages } from "../../services/toastApi";

function ModalRequest({ curModal, closeModal }) {
  const { isDeleting, deleteRequest } = useDeleteRequest();
  const { isUpdate, updateRequest } = useUpdateRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...curModal,
    },
  });

  const onSubmit = (data) => {
    const formatDate = formattingDistance(data.startDate, data.endDate);
    const checkDate = checkDistance(data.startDate, data.endDate);

    if (formatDate > 30) {
      handleErrorsMessages(
        "The date need to be lass then 30 days or equal 30 days"
      );
    } else if (checkDate) {
      handleErrorsMessages("The date needs greater than the selected date");
    } else {
      updateRequest(data, data.id);
    }
  };

  return (
    <Modal
      close={closeModal}
      name={
        <>
          Name:
          <span className="modal__input input">
            <input
              type="text"
              disabled={isUpdate}
              {...register("userName", {
                required: {
                  value: true,
                  message: "Provide you name.",
                },
                validate: (value) =>
                  value.trim() === "" ? "Provide a valid name." : null,
              })}
            />
          </span>
          <p className="error-inputs">{errors?.userName?.message}</p>
        </>
      }
      location={
        <>
          Location:{" "}
          <span className="modal__input input">
            <input
              type="text"
              disabled={isUpdate}
              {...register("location", {
                required: {
                  value: true,
                  message: "Provide your location.",
                },
                validate: (value) =>
                  value.trim() === "" ? "Provide a valid location." : null,
              })}
            />
          </span>
          <p className="error-inputs">{errors?.location?.message}</p>
        </>
      }
      dateStart={
        <>
          <FaHourglassStart />
          <span className="modal__input input">
            <input
              type="date"
              disabled={isUpdate}
              {...register("startDate", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Provide the start date.",
                },
              })}
            />
          </span>
        </>
      }
      dateEnd={
        <>
          <FaHourglassEnd />
          <span className="modal__input input">
            <input
              type="date"
              disabled={isUpdate}
              {...register("endDate", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Provide the end date.",
                },
              })}
            />
          </span>
        </>
      }
      observations={
        <>
          Observation:{" "}
          <span className="modal__input input">
            <input
              type="text"
              disabled={isUpdate}
              {...register("observation")}
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
            onClick={() => handleSubmit(onSubmit)()}
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
  );
}

export default ModalRequest;
