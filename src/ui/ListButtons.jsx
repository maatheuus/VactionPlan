import { useContext } from "react";
import Button from "./Button";
import { FilterContext } from "../context/filterRequests-context";

function ListButtons({ classNameUl, classNameLi }) {
  const { displayedCardStatus } = useContext(FilterContext);

  return (
    <ul className={classNameUl}>
      <li className={classNameLi}>
        <Button
          className="nav__list-button--all oxygen-regular button-all"
          onClick={() => displayedCardStatus("all")}
        >
          <span className="status denied"></span>
          <span className="status approve"></span>
          <span className="status pendent"></span>
          All
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className="nav__list-button--approved oxygen-regular button-all"
          onClick={() => displayedCardStatus("approve")}
        >
          <span className="status approve"></span>
          Approved
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className="nav__list-button--denied oxygen-regular button-all"
          onClick={() => displayedCardStatus("denied")}
        >
          <span className="status denied"></span>
          Denied
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className="nav__list-button--pending oxygen-regular button-all"
          onClick={() => displayedCardStatus("pending")}
        >
          <span className="status pendent"></span>
          Pending
        </Button>
      </li>
    </ul>
  );
}

export default ListButtons;
