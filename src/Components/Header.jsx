import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "./context/authUser-context";
import { FaFilePdf } from "react-icons/fa";
import { FilterContext } from "./context/filterRequests-context";

import generatePdf from "../generatePdf";
import image from "../assets/images/buzzel-logo.png";
import ListButtons from "./ListButtons";
import Button from "./Button";
import Menu from "./Menu";

function Header() {
  const [isLogout, setIsLogout] = useState(false);
  const navigate = useNavigate();
  const { logout, whoWasLogin } = useContext(AuthContext);
  const { requests } = useContext(FilterContext);

  function handleLogout() {
    setIsLogout(true);
  }

  useEffect(() => {
    if (isLogout) {
      logout();
      navigate("/");
    }
  }, [navigate, isLogout, logout]);

  return (
    <header className="header">
      <Menu />
      <div className="content-header">
        <div className="content-header__logo">
          <img src={image} alt="logo header" />
        </div>
        <div className="content-header__content-buttons">
          <nav className="nav">
            <ListButtons
              classNameUl="nav__list"
              classNameLi="nav__list-button"
            />
          </nav>
        </div>

        <div className="buttons-header">
          {whoWasLogin !== "employee" && (
            <div className="content-header__button">
              <Button
                className="content-header__button--pdf"
                onClick={() => generatePdf(requests)}
              >
                <FaFilePdf className="pdf" />
                <span>Make the pdf</span>
              </Button>
            </div>
          )}
          <div className="content-header__button">
            <Button
              className="content-header__button--back"
              onClick={handleLogout}
            >
              <FaArrowLeft className="arrow" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
