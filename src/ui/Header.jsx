import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRequests } from "../hooks/useRequests";
import { FaArrowCircleLeft, FaFilePdf } from "react-icons/fa";

import { AuthContext } from "../context/authUser-context";

import generatePdfUsers from "../generatePdf";
import ListButtons from "./ListButtons";
import Button from "./Button";
import Menu from "./Menu";

function Header() {
  const [isLogout, setIsLogout] = useState(false);
  const { requests } = useRequests();

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  function handleLogout() {
    setIsLogout(true);
  }

  useEffect(() => {
    if (isLogout) {
      logout();
      navigate("/");
    }
  }, [navigate, logout, isLogout]);

  return (
    <header className="header">
      <Menu />
      <div className="content-header">
        <div className="content-header__logo"></div>
        {url === "approve" && (
          <div className="content-header__content-buttons">
            <nav className="nav">
              <ListButtons
                classNameUl="nav__list"
                classNameLi="nav__list-button"
              />
            </nav>
          </div>
        )}

        <div className="buttons-header">
          {url === "approve" && (
            <div className="content-header__button">
              <Button
                className="content-header__button--pdf"
                onClick={() => generatePdfUsers(requests)}
              >
                <FaFilePdf className="pdf" />
              </Button>
            </div>
          )}
          <div className="content-header__button">
            <Button
              className="content-header__button--back"
              onClick={handleLogout}
            >
              <FaArrowCircleLeft className="arrow" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
