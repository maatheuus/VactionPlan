import Button from "./Button";
function ListNav() {
  return (
    <ul className="nav__list">
      <li className="nav__list-button">
        <Button className="nav__list-button--all">
          <span className="status denied"></span>
          <span className="status approve"></span>
          <span className="status pendent"></span>
          All
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--approved">
          <span className="status approve"></span>
          Approved
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--denied">
          <span className="status denied"></span>
          Denied
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--pending">
          <span className="status pendent"></span>
          Pending
        </Button>
      </li>
    </ul>
  );
}

export default ListNav;
