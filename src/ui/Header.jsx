import { useContext } from "react";
import { MenuContext } from "../context/menu-context";
import { AlignJustify } from "lucide-react";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";
import ButtonIcon from "./ButtonIcon";

function Header() {
  const { showMenu } = useContext(MenuContext);

  return (
    <header className="flex justify-between px-4 py-2 border-b-2 shadow-sm big:justify-end sm:px-10">
      <div className="flex big:hidden items-center">
        <ButtonIcon onClick={showMenu}>
          <AlignJustify />
        </ButtonIcon>
      </div>
      <div className="flex items-center gap-10">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
