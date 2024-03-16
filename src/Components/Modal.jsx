// import { useRef, useContext } from "react";
// import { ModalContext } from "../context/click-modal-context";

import Button from "./Button";

function Modal({
  isHidden = true,
  onClick,
  userName,
  location,
  dateStart,
  dateEnd,
  observation,
  children,
}) {
  function handleChange() {
    console.log("");
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
                <input onChange={handleChange} type="text" value={userName} />
              </span>
            </p>
          </div>
          <div className="modal__location">
            <p className="modal__location--text">
              Location:{" "}
              <span className="modal__location--span input">
                <input onChange={handleChange} type="text" value={location} />
              </span>
            </p>
          </div>

          <div className="modal__date">
            <p className="modal__date--text">
              Date requested:{" "}
              <span className="modal__date--start input">
                start:{" "}
                <input onChange={handleChange} type="date" value={dateStart} />
              </span>
              <span className="modal__date--end input">
                end:{" "}
                <input onChange={handleChange} type="date" value={dateEnd} />
              </span>
            </p>
          </div>
          <div className="modal__observation">
            <p className="modal__observation--text">
              Observation:{" "}
              <span className="modal__observation--span input">
                <input
                  onChange={handleChange}
                  type="text"
                  value={observation}
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

          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
