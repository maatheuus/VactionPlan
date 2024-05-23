import MainNav from "../features/approver/MainNavApprover";
import MainNavEmployer from "../features/employer/MainNavEmployer";
import { useLocation } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import UserAvatar from "./UserAvatar";
import { MenuContext } from "../context/menu-context";
import { useContext } from "react";
import { CircleX } from "lucide-react";
import ButtonIcon from "./ButtonIcon";

function SideBar() {
  const { isVisibleMenu, showMenu } = useContext(MenuContext);

  const { pathname } = useLocation();
  const url = pathname.replace("/", "");
  const { user = {} } = useUser();
  const {
    email,
    user_metadata: { fullName },
  } = user;

  return (
    <aside
      className={`big:w-72 big:flex big:flex-col big:backdrop-blur-none big:relative z-20 fixed top-0 gap-12 h-full w-screen backdrop-blur-sm  ${isVisibleMenu ? "block" : "hidden"}`}
    >
      <div className="h-full relative bg-stone-950 px-10 py-11 big:w-auto w-96">
        {isVisibleMenu && (
          <ButtonIcon
            className="absolute right-10 top-3 w-8 h-8"
            type="secondary"
            onClick={showMenu}
          >
            <CircleX className="w-8 h-8" />
          </ButtonIcon>
        )}

        <div>
          <UserAvatar
            name={url.startsWith("approver") ? fullName : "Employer"}
            className="flex-col"
          >
            <p className="lowercase text-gray-500">{email}</p>
          </UserAvatar>
        </div>

        {url.startsWith("approver") && <MainNav />}
        {url.startsWith("requests") && <MainNavEmployer />}
      </div>
    </aside>
  );
}

export default SideBar;
