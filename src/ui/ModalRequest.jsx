import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaRegTrashAlt,
  FaRegEdit,
  FaRegWindowClose,
  FaCalendarAlt,
} from "react-icons/fa";

import { ModalContext } from "../context/modal-context";

import Button from "./Button";
import { useDeleteRequest } from "../hooks/useDeleteRequest";
import { useUpdateRequest } from "../hooks/useUpdateRequest";

function ModalRequest({ isHidden = true, onClick, curModal }) {
  const { hiddenModal } = useContext(ModalContext);
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

    if (!isUpdate) hiddenModal("hidden");
  };

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
        <Button
          onClick={onClick}
          className="modal__content-button--close button-modal"
        >
          <FaRegWindowClose />
        </Button>
        <h2 className="modal__title">Vacation</h2>
        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text maven-pro">
              UserName:{" "}
              <span className="modal__name--span input">
                <input
                  type="text"
                  {...register("userName", {
                    value: userName,
                  })}
                />
              </span>
            </p>
          </div>
          <div className="modal__location">
            <p className="modal__location--text maven-pro">
              Location:{" "}
              <span className="modal__location--span input">
                <input
                  type="text"
                  {...register("location", {
                    value: location,
                  })}
                />
              </span>
            </p>
          </div>

          <div className="modal__date">
            <p className="modal__date--text maven-pro">
              <FaCalendarAlt /> start:
            </p>
            <span className="modal__date--start input">
              <input
                type="date"
                {...register("startDate", {
                  value: startDate,
                })}
              />
            </span>
            <p className="modal__date--text maven-pro">
              <FaCalendarAlt /> end:
            </p>{" "}
            <span className="modal__date--end input">
              <input
                type="date"
                {...register("endDate", {
                  value: endDate,
                })}
              />
            </span>
          </div>

          <div className="modal__observation">
            <p className="modal__observation--text maven-pro">
              Observation:{" "}
              <span className="modal__observation--span input">
                <input
                  type="text"
                  {...register("observation", {
                    value: observation,
                  })}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="modal__content-buttons button-modal maven-pro">
          <div className="buttons">
            <Button
              className="modal__content-buttons--aprove button-modal"
              type="submit"
              disabled={isUpdate}
              onClick={() => handleSubmit(onSubmit)()}
            >
              <FaRegEdit />
            </Button>
            <Button
              className="modal__content-buttons--deny button-modal"
              disabled={isDeleting}
              onClick={() => deleteRequest(curModal.id)}
            >
              <FaRegTrashAlt />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRequest;
