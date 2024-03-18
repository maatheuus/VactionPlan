import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../Components/context/modal-context";
import { deleteRequest, updateRequest } from "../apiTable";

import Button from "./Button";

function Modal({ isHidden = true, onClick, curModal }) {
  const { page, hiddenModal } = useContext(ModalContext);

  const { userName, location, startDate, endDate, observation, id } = curModal;

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
    hiddenModal("hidden");
    return updateRequest(data, data.id);
  };
  function handleDeleteRequest(id) {
    hiddenModal("hidden");
    return deleteRequest(id);
  }

  function handleApproveRequests() {
    console.log("approve requests");
  }
  function handleDenyRequests() {
    console.log("deny requests");
  }

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
        <h2 className="modal__title">Vacation</h2>
        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text">
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
            <p className="modal__location--text">
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
            <p className="modal__date--text">
              Date requested:{" "}
              <span className="modal__date--start input">
                start:{" "}
                <input
                  type="text"
                  {...register("startDate", {
                    value: startDate,
                  })}
                />
              </span>
              <span className="modal__date--end input">
                end:{" "}
                <input
                  type="text"
                  {...register("endDate", {
                    value: endDate,
                  })}
                />
              </span>
            </p>
          </div>
          <div className="modal__observation">
            <p className="modal__observation--text">
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
        <div className="modal__content-buttons button-modal">
          <div className="modal__content-button ">
            <Button
              onClick={onClick}
              className="modal__content-button--close button-modal"
            >
              Close
            </Button>
          </div>
          {page === "approve" && (
            <div className="buttons">
              <Button
                className="modal__content-buttons--aprove button-modal"
                onClick={handleApproveRequests}
              >
                Approve
              </Button>
              <Button
                className="modal__content-buttons--deny button-modal"
                onClick={handleDenyRequests}
              >
                Deny
              </Button>
            </div>
          )}
          {page === "request" && (
            <div className="buttons">
              <Button
                className="modal__content-buttons--aprove button-modal"
                type="submit"
                onClick={() => handleSubmit(onSubmit)()}
              >
                Update
              </Button>
              <Button
                className="modal__content-buttons--deny button-modal"
                onClick={() => handleDeleteRequest(curModal.id)}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
