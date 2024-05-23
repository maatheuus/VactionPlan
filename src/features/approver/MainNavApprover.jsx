import { Home, Download, ClipboardList, Settings, User } from "lucide-react";
import { useRequests } from "../requests/useRequests";
import generatePdfUsers from "../../services/generatePdf";
import ButtonIcon from "../../ui/ButtonIcon";
import Logout from "../authentication/Logout";
import { useContext } from "react";
import { MenuContext } from "../../context/menu-context";

function MainNav() {
  const { requests } = useRequests();
  const { showMenu, isVisibleMenu } = useContext(MenuContext);

  return (
    <nav className="flex flex-col justify-around h-4/5">
      <ul className="list-none flex flex-col items-start gap-2">
        <li>
          <ButtonIcon
            onClick={() => isVisibleMenu && showMenu()}
            to="/approver"
            type="secondary"
          >
            <Home />
            <span>Home</span>
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon
            onClick={() => isVisibleMenu && showMenu()}
            to="approver/requests"
            type="secondary"
          >
            <ClipboardList /> <span>Requests</span>
          </ButtonIcon>
        </li>

        <li>
          <ButtonIcon
            onClick={() => isVisibleMenu && showMenu()}
            to="approver/register"
            type="secondary"
          >
            <User /> <span>Users</span>
          </ButtonIcon>
        </li>

        <li>
          <ButtonIcon
            type="secondary"
            onClick={() => generatePdfUsers(requests)}
          >
            <Download /> <span>PDF</span>
          </ButtonIcon>
        </li>

        <li>
          <ButtonIcon
            onClick={() => isVisibleMenu && showMenu()}
            to="approver/settings"
            type="secondary"
          >
            <Settings /> <span>Settings</span>
          </ButtonIcon>
        </li>
      </ul>

      <div>
        <Logout label="Logout" />
      </div>
    </nav>
  );
}

export default MainNav;
