import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

import { FaAlignRight } from "react-icons/fa";

import ListButtons from "./ListButtons";
import ButtonIcon from "./ButtonIcon";

function Menu() {
  const { hiddenMenu, menuIsHidden } = useContext(ModalContext);

  const hidden = "hidden";

  return (
    <menu className="menu">
      <ButtonIcon
        className="button-all"
        icon={<FaAlignRight className=" menu__hamburguer" />}
        onClick={() => hiddenMenu("hidden")}
      />

      <div className={`menu__content ${menuIsHidden ? hidden : ""}`}>
        <ListButtons
          classNameUl="menu__list"
          classNameLi="menu__list-button"
          isMenu
        />
      </div>
    </menu>
  );
}

export default Menu;
