import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "./context/modal-context";
import { AuthContext } from "./context/authUser-context";
import { FilterContext } from "./context/filterRequests-context";
import { FaArrowLeft, FaBars, FaFilePdf } from "react-icons/fa";

import ListButtons from "./ListButtons";
import Button from "./Button";
import generatePdfUsers from "../generatePdf";

function Menu() {
  const navigate = useNavigate();

  const [isLogout, setIsLogout] = useState(false);
  const [makePdf, setMakePdf] = useState(false);
  const { logout, whoWasLogin } = useContext(AuthContext);

  const { requests } = useContext(FilterContext);
  const { hiddenMenu, menuIsHidden } = useContext(ModalContext);

  function handleLogout() {
    setIsLogout(true);
  }
  function handleMakeThePdf() {
    setMakePdf(true);
  }

  useEffect(() => {
    if (makePdf) generatePdfUsers(requests);
  }, [makePdf, requests]);

  useEffect(() => {
    if (isLogout) {
      logout();
      navigate("/");
    }
  }, [navigate, isLogout, logout]);

  const hidden = " hidden";

  return (
    <>
      <menu className="menu">
        <div className="menu__content">
          <Button className="button-all" onClick={() => hiddenMenu("hidden")}>
            <FaBars className=" menu__hamburguer" />
          </Button>

          <div className={`menu__list ${menuIsHidden ? hidden : ""}`}>
            <div className="menu__items">
              <ListButtons />
            </div>

            <div className="buttons-menu">
              {whoWasLogin !== "employee" && (
                <div className="content-header__button">
                  <Button
                    className="content-header__button--pdf"
                    onClick={handleMakeThePdf}
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
        </div>
      </menu>
    </>
  );
}

export default Menu;
