import { useSearchParams } from "react-router-dom";
import Button from "./Button";

function ListButtons({ classNameUl, classNameLi, isMenu }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("filtered", value);
    setSearchParams(searchParams);
  }

  return (
    <ul className={classNameUl}>
      <li className={classNameLi}>
        <Button
          className={`${isMenu ? "menu" : "nav"}__list-button--all button-all`}
          onClick={() => handleClick("all")}
        >
          <span className="status denied"></span>
          <span className="status approve"></span>
          <span className="status pendent"></span>
          All
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className={`${
            isMenu ? "menu" : "nav"
          }__list-button--approved button-all`}
          onClick={() => handleClick("approve")}
        >
          <span className="status approve"></span>
          Approved
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className={`${
            isMenu ? "menu" : "nav"
          }__list-button--denied button-all`}
          onClick={() => handleClick("denied")}
        >
          <span className="status denied"></span>
          Denied
        </Button>
      </li>
      <li className={classNameLi}>
        <Button
          className={`${
            isMenu ? "menu" : "nav"
          }__list-button--pending button-all`}
          onClick={() => handleClick("pendent")}
        >
          <span className="status pendent"></span>
          Pending
        </Button>
      </li>
    </ul>
  );
}

export default ListButtons;
