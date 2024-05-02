import { useLocation, useNavigate } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

import ListButtons from "./ListButtons";
import Menu from "./Menu";
import Logout from "../features/authentication/Logout";
import Button from "../ui/Button";

function Header() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="content-header">
        {url === "approver" ? (
          <>
            <Menu />
            <Logout />

            <div className="content-header__content-buttons">
              <nav className="nav">
                <ListButtons
                  classNameUl="nav__list"
                  classNameLi="nav__list-button"
                />
              </nav>
            </div>
          </>
        ) : (
          <Button onClick={() => navigate(-1)} className="button-all">
            <FaCircleArrowLeft className="arrow-left" />
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
