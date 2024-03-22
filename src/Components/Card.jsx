import { useContext } from "react";
import { FaEye } from "react-icons/fa";

import Button from "./Button";
import ModalApprove from "./ModalApprove";
import ModalRequest from "./ModalRequest";
import { ModalContext } from "./context/modal-context";

function Card({ title, curRequest, onClick }) {
  const { hiddenModal, isHidden, viewSelected, page } =
    useContext(ModalContext);

  const viewApprove = viewSelected === curRequest.id && page === "approve";
  const viewRequest = viewSelected === curRequest.id && page === "request";
  const modalIsHidden = "hidden";

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
              {curRequest.startDate}
            </span>
          </p>
          <p className="card__date-end">
            end:
            <span className="card__date-end--description">
              {curRequest.endDate}
            </span>
          </p>
        </div>

        <div className="card__information-bottom">
          <div className="card__information-bottom--view">
            <Button className="button-all" onClick={onClick}>
              <FaEye className="card__information-bottom--icon" />
              <span className="card__information-bottom--text">view</span>
            </Button>
          </div>
          <div className="card__information-bottom--status">
            <span className={`status ${curRequest.statusRequest}`}></span>
            <span>{curRequest.statusRequest}</span>
          </div>
        </div>
      </div>

      {viewApprove && (
        <ModalApprove
          key={curRequest.id}
          isHidden={isHidden ? modalIsHidden : ""}
          curModal={curRequest}
          onClick={() => hiddenModal("hidden")}
        />
      )}
      {viewRequest && (
        <ModalRequest
          key={curRequest.id}
          isHidden={isHidden ? modalIsHidden : ""}
          curModal={curRequest}
          onClick={() => hiddenModal("hidden")}
        />
      )}
    </div>
  );
}

export default Card;
