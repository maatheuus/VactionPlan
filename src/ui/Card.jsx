import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";

import ModalApprove from "../features/approve/ModalApprove";
import ModalRequest from "../features/requests/ModalRequest";

import ButtonIcon from "./ButtonIcon";

function Card({ title, curRequest }) {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  const close = setIsOpen;
  const open = () => setIsOpen(true);

  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title maven-pro">{title}</h1>
        <p className="card__username">
          Name:
          <span>{curRequest.userName}</span>
        </p>
        <p className="card__location">
          Location: <span>{curRequest.location}</span>
        </p>
        <div className="card__date">
          <p className="card__date-start">
            start:
            <span>{curRequest.startDate}</span>
          </p>
          <p className="card__date-end">
            end:
            <span>{curRequest.endDate}</span>
          </p>
        </div>

        <div className="card__information-bottom maven-pro">
          <div>
            <ButtonIcon onClick={open} icon={<FaEye />} />
          </div>
          <div className="card__information-bottom--status">
            <span className={`status ${curRequest.statusRequest}`}></span>
            <span>{curRequest.statusRequest}</span>
          </div>
        </div>
      </div>

      {isOpen && url === "approver" && (
        <ModalApprove
          key={curRequest.id}
          curModal={curRequest}
          closeModal={close}
        />
      )}

      {isOpen && url === "requests" && (
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
