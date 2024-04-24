import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/modal-context";

import { useLocation, useNavigate } from "react-router-dom";
import { useRequests } from "../hooks/useRequests";
import { AuthContext } from "../context/authUser-context";

import { FaArrowCircleLeft, FaAlignRight, FaFilePdf } from "react-icons/fa";

import ListButtons from "./ListButtons";
import Button from "./Button";
import generatePdfUsers from "../services/generatePdf";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

function Menu() {
  const [isLogout, setIsLogout] = useState(false);
  const { requests } = useRequests();
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const { hiddenMenu, menuIsHidden } = useContext(ModalContext);

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

  const hidden = "hidden";

  return (
    <>
      <menu className="menu">
        <Button className="button-all" onClick={() => hiddenMenu("hidden")}>
          <FaAlignRight className=" menu__hamburguer" />
        </Button>
        <div className={`menu__content ${menuIsHidden ? hidden : ""}`}>
          <div className="menu__list">
            <div className="menu__items">
              <ListButtons />
            </div>

            <div className="buttons-menu">
              {url === "approve" && (
                <Button to="settings" style={{ cursor: "pointer" }}>
                  <HiOutlineCog6Tooth
                    style={{
                      width: "6rem",
                      height: "3rem",
                    }}
                  />
                </Button>
              )}
            </div>
          </div>
        </div>
      </menu>
    </>
  );
}

export default Menu;

{
  /* <div className="content-header__button">
  <Button
    className="content-header__button--back"
    onClick={handleLogout}
  >
    <FaArrowCircleLeft className="arrow" />
    <span>Logout</span>
  </Button>
</div> */
}
