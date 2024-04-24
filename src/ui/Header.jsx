import { useLocation } from "react-router-dom";

import ListButtons from "./ListButtons";
import Menu from "./Menu";

function Header() {
  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

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

        {/* <div className="buttons-header"> */}
        {/* {url === "approve" && (
          <Button to="settings" style={{ cursor: "pointer" }}>
            <HiOutlineCog6Tooth
              style={{
                width: "6rem",
                height: "3rem",
              }}
            />
          </Button>
        )} */}
        {/* {url === "approve" && (
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
          </div> */}
        {/* </div> */}
        {/* {url !== "approve/register" && <Outlet />} */}
      </div>
    </header>
  );
}

export default Header;
