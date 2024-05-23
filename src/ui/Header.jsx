import { useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./UserAvatar";
import { AlignJustify } from "lucide-react";
import ButtonIcon from "./ButtonIcon";
import { MenuContext } from "../context/menu-context";
import { useContext } from "react";

function Header() {
  const { showMenu } = useContext(MenuContext);

  const { pathname } = useLocation();
  const url = pathname.replace("/", "");

  return (
    <header className="flex justify-between px-4 py-2 border-b-2 shadow-sm big:justify-end sm:px-10">
      <div className="flex big:hidden items-center">
        <ButtonIcon onClick={showMenu}>
          <AlignJustify />
        </ButtonIcon>
      </div>
      <div className="flex items-center gap-10">
        <UserAvatar />
        <HeaderMenu url={url} />
      </div>
    </header>
  );
}

export default Header;
