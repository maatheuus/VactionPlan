import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "./context/modal-context";
import { deleteRequest, updateRequest } from "../apiTable";

import Button from "./Button";

function ModalRequest({ isHidden = true, onClick, curModal }) {
  const [updateRequests, setUpdateRequest] = useState();
  const [updateIsTrue, setUpdateIsTrue] = useState(false);

  const [deleteCurRequest, setDeleteCurRequest] = useState();
  const [deleteIsTrue, setDeleteIsTrue] = useState(false);

  const { hiddenModal } = useContext(ModalContext);
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
    setUpdateRequest(data, data.id);
    setUpdateIsTrue(true);
  };
  function handleDeleteRequest(id) {
    hiddenModal("hidden");
    setDeleteIsTrue(true);
    setDeleteCurRequest(id);
  }

  // Verify if the update is true, then update the request data
  useEffect(() => {
    if (updateIsTrue) updateRequest(updateRequests, updateRequests.id);
  }, [updateRequests, updateIsTrue]);

  // Verify if the cur request has delete, then update the requests
  useEffect(() => {
    if (deleteIsTrue) deleteRequest(deleteCurRequest);
  }, [deleteIsTrue, deleteCurRequest]);

  return (
    <div className={`modal ${isHidden}`}>
      <div className="modal__content">
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
          <div className="modal__content-button ">
            <Button
              onClick={onClick}
              className="modal__content-button--close button-modal"
            >
              Close
            </Button>
          </div>

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
        </div>
      </div>
    </div>
  );
}

export default ModalRequest;
