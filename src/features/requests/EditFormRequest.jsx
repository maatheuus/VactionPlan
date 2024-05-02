import { useForm } from "react-hook-form";
import { useDeleteRequest } from "./useDeleteRequest";
import { useUpdateRequest } from "./useUpdateRequest";
import { FaRegTrashAlt } from "react-icons/fa";

import Modal from "../../ui/Modal";
import ButtonIcon from "../../ui/ButtonIcon";
import Button from "../../ui/Button";
import {
  checkDistance,
  formattingDistance,
} from "../../services/formattingDate";
import { handleErrorsMessages } from "../../services/toastApi";
import SpinnerMini from "../../ui/SpinnerMini";

function EditFormRequest({ curModal, closeModal }) {
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
      updateRequest({ newRequestData: data, id: data.id });
    }
  };

  return (
    <Modal
      close={closeModal}
      error={errors}
      userName={
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
      }
      location={
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
      }
      startDate={
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
      }
      endDate={
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
      }
      observation={
        <span className="modal__input input">
          <input type="text" disabled={isUpdate} {...register("observation")} />
        </span>
      }
      buttons={
        <>
          <Button
            className="modal__content-button--aprove button-modal"
            disabled={isUpdate}
            onClick={() => handleSubmit(onSubmit)()}
          >
            {isUpdate ? <SpinnerMini /> : "Confirm"}
          </Button>

          <ButtonIcon
            icon={isDeleting ? <SpinnerMini /> : <FaRegTrashAlt />}
            className="modal__content-button--deny button-modal"
            disabled={isDeleting}
            onClick={() => deleteRequest(curModal)}
          />
        </>
      }
    />
  );
}

export default EditFormRequest;
