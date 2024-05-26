import { User } from "lucide-react";
import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import { useUrl } from "../hooks/useUrl";

function HeaderMenu() {
  const { approver } = useUrl();
  return (
    <ul className="flex items-center gap-3">
      {approver && (
        <li>
          <ButtonIcon
            className="hover:text-black"
            type="secondary"
            to="approver/settings"
          >
            <User />
          </ButtonIcon>
        </li>
      )}
      <li>
        <Logout className="hover:text-black" />
      </li>
    </ul>
  );
}

export default HeaderMenu;
