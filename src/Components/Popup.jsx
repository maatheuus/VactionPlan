// import { useRef, useContext } from "react";
// import { ModalContext } from "../context/click-modal-context";

import Button from "./Button";

function Popup({ isHidden = true, onClick, children }) {
  return (
    <div className={`popup ${isHidden}`}>
      <div className="popup__content">
        <h2 className="popup__title">Vacation</h2>
        <div className="popup__content-information">
          <div className="popup__name">
            <p className="popup__name--text">
              UserName:{" "}
              <span className="popup__name--span input">
                <input type="text" value="Maat" />
              </span>
            </p>
          </div>
          <div className="popup__location">
            <p className="popup__location--text">
              Location:{" "}
              <span className="popup__location--span input">
                <input type="text" value="Angola" />
              </span>
            </p>
          </div>

          <div className="popup__date">
            <p className="popup__date--text">
              Date requested:{" "}
              <span className="popup__date--start input">
                start: <input type="date" value="2000/05/06" />
              </span>
              <span className="popup__date--end input">
                end: <input type="date" value="2000/05/06" />
              </span>
            </p>
          </div>
          <div className="popup__observation">
            <p className="popup__observation--text">
              Observation:{" "}
              <span className="popup__observation--span input">
                <input
                  type="text"
                  value="rem ipsum dolor sit amet, consectetur adipisicing elit. Quos"
                />
              </span>
            </p>
          </div>
        </div>
        <div className="popup__content-buttons button-popup">
          <div className="popup__content-button ">
            <Button
              onClick={onClick}
              className="popup__content-button--close button-popup"
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

export default Popup;
