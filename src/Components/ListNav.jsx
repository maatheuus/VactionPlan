import { useContext } from "react";
import Button from "./Button";
import { FilterContext } from "./context/filterRequests-context";

function ListNav() {
  const { displayedCardStatus } = useContext(FilterContext);

  return (
    <ul className="nav__list">
      <li className="nav__list-button">
        <Button
          className="nav__list-button--all"
          onClick={() => displayedCardStatus("all")}
        >
          <span className="status denied"></span>
          <span className="status approve"></span>
          <span className="status pendent"></span>
          All
        </Button>
      </li>
      <li className="nav__list-button">
        <Button
          className="nav__list-button--approved"
          onClick={() => displayedCardStatus("approve")}
        >
          <span className="status approve"></span>
          Approved
        </Button>
      </li>
      <li className="nav__list-button">
        <Button
          className="nav__list-button--denied"
          onClick={() => displayedCardStatus("denied")}
        >
          <span className="status denied"></span>
          Denied
        </Button>
      </li>
      <li className="nav__list-button">
        <Button
          className="nav__list-button--pending"
          onClick={() => displayedCardStatus("pending")}
        >
          <span className="status pendent"></span>
          Pending
        </Button>
      </li>
    </ul>
  );
}

export default ListNav;
