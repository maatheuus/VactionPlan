import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "./context/authUser-context";

import image from "../assets/images/buzzel-logo.png";
import ListNav from "./ListNav";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    logout();
    navigate("/");
  }

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
            onClick={handleLogout}
          >
            <FaArrowLeft className="arrow" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
