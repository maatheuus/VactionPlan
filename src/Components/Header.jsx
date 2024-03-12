import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import image from "../assets/images/buzzel-logo.png";
import ListNav from "./ListNav";
import Button from "./Button";

function Header() {
  const back = useNavigate();

  return (
    <header className="header">
      <div className="content-header">
        <div className="content-header__logo">
          <img src={image} alt="logo header" />
        </div>
        <div className="content-header__content-buttons">
          <nav className="nav">
            <ListNav />
          </nav>
        </div>

        <div className="content-header__button">
          <Button
            className="content-header__button--back"
            onClick={() => back(-1)}
          >
            <FaArrowLeft className="arrow" />
          </Button>
          <p className="content-header__name">@maatBakari</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
