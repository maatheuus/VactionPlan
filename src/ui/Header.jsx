import { useLocation } from "react-router-dom";

import ListButtons from "./ListButtons";
import Menu from "./Menu";

function Header() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  return (
    <header className="header">
      <div className="content-header">
        {url === "approver" && (
          <>
            <Menu />
            <div className="content-header__content-buttons">
              <nav className="nav">
                <ListButtons
                  classNameUl="nav__list"
                  classNameLi="nav__list-button"
                />
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
