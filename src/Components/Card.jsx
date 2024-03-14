import { FaEye } from "react-icons/fa";
import Button from "./Button";

function Card({
  title,
  userName,
  location,
  dateStart,
  dateEnd,
  view = true,
  onClick,
}) {
  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title">{title}</h1>
        <p className="card__username">{userName}</p>
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
    </div>
  );
}

export default Card;
