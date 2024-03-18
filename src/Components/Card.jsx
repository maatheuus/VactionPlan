import { useContext, useRef } from "react";
import { FaEye } from "react-icons/fa";

import Button from "./Button";
import Modal from "./Modal";
import { ModalContext } from "./context/modal-context";
import { RequestContext } from "./context/users-datas-context";

function Card({ title, curRequest, view = true, onClick }) {
  const { hiddenModal, isHidden, viewSelected, page } =
    useContext(ModalContext);
  const { deleteRequest, updateRequest } = useContext(RequestContext);

  const viewApprove = viewSelected === curRequest.id && page === "approve";
  const viewRequest = viewSelected === curRequest.id && page === "request";
  const hidden = "hidden";

  function handleDeleteRequest(id) {
    return deleteRequest(id);
  }
  const userData = useRef();
  function handleUpdateRequestData(id) {
    console.log(id);
    console.log(userData.current.inputValue());

    // return updateRequest(id);
  }

  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title">{title}</h1>
        <p className="card__username">
          Name:
          <span className="card__username--description">
            {curRequest.userName}
          </span>
        </p>
        <p className="card__location">
          Location:{" "}
          <span className="card__location--description">
            {curRequest.location}
          </span>
        </p>
        <div className="card__date">
          <p className="card__date-start">
            start:
            <span className="card__date-start--description">
              {curRequest.dateStart}
            </span>
          </p>
          <p className="card__date-end">
            end:
            <span className="card__date-end--description">
              {curRequest.dateEnd}
            </span>
          </p>
        </div>

        {view && (
          <div className="card__information-bottom">
            <div className="card__information-bottom--view">
              <Button className="button-all" onClick={onClick}>
                <FaEye className="card__information-bottom--icon" />
                <span className="card__information-bottom--text">view</span>
              </Button>
            </div>
            <div className="card__information-bottom--status">
              <span className="ball red"></span>
              <span>status</span>
            </div>
          </div>
        )}
      </div>
      {viewApprove && (
        <Modal
          key={curRequest.id}
          isHidden={isHidden ? hidden : ""}
          curModal={curRequest}
          ref={userData}
          onClick={() => hiddenModal("hidden")}
        >
          <div className="buttons">
            <Button className="modal__content-buttons--aprove button-modal">
              Approve
            </Button>
            <Button className="modal__content-buttons--deny button-modal">
              Deny
            </Button>
          </div>
        </Modal>
      )}
      {viewRequest && (
        <Modal
          key={curRequest.id}
          isHidden={isHidden ? hidden : ""}
          curModal={curRequest}
          onClick={() => hiddenModal("hidden")}
        >
          <div className="buttons">
            <Button
              className="modal__content-buttons--aprove button-modal"
              onClick={() => handleUpdateRequestData(curRequest.id)}
            >
              Update
            </Button>
            <Button
              className="modal__content-buttons--deny button-modal"
              onClick={() => handleDeleteRequest(curRequest.id)}
            >
              Delete
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Card;
