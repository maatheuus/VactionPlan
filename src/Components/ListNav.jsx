import Button from "./Button";
function ListNav() {
  return (
    <ul className="nav__list">
      <li className="nav__list-button">
        <Button className="nav__list-button--all">
          <span className="ball red"></span>
          <span className="ball green"></span>
          <span className="ball orange"></span>
          All
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--approved">
          <span className="ball green"></span>
          Approved
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--denied">
          <span className="ball red"></span>
          Denied
        </Button>
      </li>
      <li className="nav__list-button">
        <Button className="nav__list-button--pending">
          <span className="ball orange"></span>
          Pending
        </Button>
      </li>
    </ul>
  );
}

export default ListNav;
