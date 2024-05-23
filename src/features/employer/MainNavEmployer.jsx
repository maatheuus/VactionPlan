import { useContext } from "react";
import { ClipboardList, Clipboard } from "lucide-react";

import { MenuContext } from "../../context/menu-context";
import Logout from "../authentication/Logout";
import ButtonIcon from "../../ui/ButtonIcon";

function MainNav() {
  const { showMenu, isVisibleMenu } = useContext(MenuContext);

  return (
    <nav className="flex flex-col justify-around h-4/5">
      <ul className="list-none flex flex-col items-start gap-2">
        <li>
          <ButtonIcon
            to="requests/employers"
            type="secondary"
            onClick={() => isVisibleMenu && showMenu()}
          >
            <ClipboardList /> <span>Requests</span>
          </ButtonIcon>
        </li>

        <li>
          <ButtonIcon
            to="requests/newRequest"
            type="secondary"
            onClick={() => isVisibleMenu && showMenu()}
          >
            <Clipboard /> <span>New Request</span>
          </ButtonIcon>
        </li>
      </ul>

      <div className="flex justify-center">
        <Logout label="Logout" />
      </div>
    </nav>
  );
}

export default MainNav;
