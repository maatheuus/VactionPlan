import { useContext } from "react";
import { FaEye } from "react-icons/fa";

import Button from "./Button";
import Modal from "./Modal";
import { ModalContext } from "./context/modal-context";
import { FAKE_USERS } from "../FAKE_USERS";

function Card({
  title,
  userName,
  location,
  dateStart,
  dateEnd,
  curUser,
  view = true,
  onClick,
  id,
  updateUsers,
}) {
  const { hiddenModal, isHidden, viewSelected, page } =
    useContext(ModalContext);
  const hidden = "hidden";

  const viewApprove = viewSelected === id && page === "approve";
  const viewRequest = viewSelected === id && page === "request";

  function handleDeleteUser() {
    const newData = [...FAKE_USERS];

    const findUser = newData.findIndex((user) => user.id === curUser.id);

    newData.splice(findUser, 1);
    return updateUsers(newData);
  }

  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title">{title}</h1>
        <p className="card__username">
          Name:
          <span className="card__username--description">{userName}</span>
        </p>
        <p className="card__location">
          Location:{" "}
          <span className="card__location--description">{location}</span>
        </p>
        <div className="card__date">
          <p className="card__date-start">
            start:
            <span className="card__date-start--description">{dateStart}</span>
          </p>
          <p className="card__date-end">
            end:
            <span className="card__date-end--description">{dateEnd}</span>
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
          isHidden={isHidden ? hidden : ""}
          onClick={() => hiddenModal("hidden")}
          userName={userName}
          location={location}
          key={id}
          dateStart={dateStart}
          dateEnd={dateEnd}
          observation="lorent directly selected item  from"
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
          isHidden={isHidden ? hidden : ""}
          onClick={() => hiddenModal("hidden")}
          userName={userName}
          location={location}
          key={id}
          dateStart={dateStart}
          dateEnd={dateEnd}
          observation="lorent directly selected item  from"
        >
          <div className="buttons">
            <Button className="modal__content-buttons--aprove button-modal">
              Update
            </Button>
            <Button
              className="modal__content-buttons--deny button-modal"
              onClick={handleDeleteUser}
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
