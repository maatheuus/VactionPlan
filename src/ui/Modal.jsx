import { createPortal } from "react-dom";
import { FaRegWindowClose } from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick";
import Button from "./Button";

function Modal(props) {
  const { name, location, dateStart, dateEnd, observations, buttons, close } =
    props;
  const ref = useOutsideClick(close);

  return createPortal(
    <div className="modal">
      <div className="modal__content" ref={ref}>
        <Button
          className="modal__content-button--close button-modal"
          onClick={close}
        >
          <FaRegWindowClose />
        </Button>
        <h2 className="modal__title maven-pro ">Vacations</h2>

        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text maven-pro">{name}</p>
          </div>

          <div className="modal__location">
            <p className="modal__location--text maven-pro">{location}</p>
          </div>

          <div className="modal__date">
            <p className="modal__date--text maven-pro">{dateStart}</p>
            <p className="modal__date--text maven-pro">{dateEnd}</p>
          </div>

          <div className="modal__observation">
            <p className="modal__observation--text maven-pro">{observations}</p>
          </div>
        </div>

        <div className="modal__content-buttons button-modal  maven-pro">
          <div className="buttons">{buttons}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
