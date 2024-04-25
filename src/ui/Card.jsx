import { useState } from "react";
import { FaEye } from "react-icons/fa";

import Button from "./Button";
import ModalApprove from "../features/approve/ModalApprove";
import ModalRequest from "../features/requests/ModalRequest";

import { useLocation } from "react-router-dom";

function Card({ title, curRequest }) {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title maven-pro">{title}</h1>
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

        <div className="card__information-bottom  maven-pro">
          <div className="card__information-bottom--view">
            <Button className="button-all" onClick={open}>
              <FaEye className="card__information-bottom--icon" />
            </Button>
          </div>
          <div className="card__information-bottom--status">
            <span className={`status ${curRequest.statusRequest}`}></span>
            <span>{curRequest.statusRequest}</span>
          </div>
        </div>
      </div>

      {isOpen && url === "approve" && (
        <ModalApprove
          key={curRequest.id}
          curModal={curRequest}
          closeModal={close}
        />
      )}
      {isOpen && url === "request" && (
        <ModalRequest
          key={curRequest.id}
          curModal={curRequest}
          closeModal={close}
        />
      )}
    </div>
  );
}

export default Card;
