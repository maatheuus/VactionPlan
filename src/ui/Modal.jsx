import { createPortal } from "react-dom";
import {
  FaHourglassEnd,
  FaHourglassStart,
  FaRegWindowClose,
} from "react-icons/fa";
import { useOutsideClick } from "../hooks/useOutsideClick";
import ButtonIcon from "../ui/ButtonIcon";

function Modal({ buttons, error, curModal, close }) {
  const { userName, location, startDate, endDate, observation } = curModal;

  const ref = useOutsideClick(close);

  return createPortal(
    <div className="modal">
      <div className="modal__content" ref={ref}>
        <ButtonIcon
          className="modal__content-button--close"
          onClick={() => close()}
          icon={<FaRegWindowClose />}
        />
        <h2 className="modal__title maven-pro">Vacations</h2>

        <div className="modal__content-information">
          <div className="modal__name">
            <p className="modal__name--text maven-pro">Name: {userName} </p>
            <span className="error-inputs">{error?.userName?.message}</span>
          </div>

          <div className="modal__location">
            <p className="modal__location--text maven-pro">
              Location: {location}
              <span className="error-inputs">{error?.location?.message}</span>
            </p>
          </div>

          <div className="modal__date">
            <p className="maven-pro">
              <FaHourglassStart /> {startDate}
            </p>
            <p className="maven-pro">
              <FaHourglassEnd /> {endDate}
            </p>
          </div>

          <div className="modal__observation">
            <p className="modal__observation--text maven-pro">
              Observation:
              {observation}
            </p>
          </div>
        </div>
        <div className="modal__content-button maven-pro">{buttons}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
