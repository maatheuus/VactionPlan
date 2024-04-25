import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

import { FaAlignRight } from "react-icons/fa";

import ListButtons from "./ListButtons";
import Button from "./Button";

function Menu() {
  const { hiddenMenu, menuIsHidden } = useContext(ModalContext);

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
          </div>
        </div>
      </menu>
    </>
  );
}

export default Menu;
