import { useContext } from "react";
import { CircleX } from "lucide-react";
import { MenuContext } from "../context/menu-context";
import { useUrl } from "../hooks/useUrl";
import UserAvatar from "./UserAvatar";
import ButtonIcon from "./ButtonIcon";
import MainNav from "../features/approver/MainNavApprover";
import MainNavEmployer from "../features/employer/MainNavEmployer";
import { useUser } from "../features/authentication/useUser";

function SideBar() {
  const { isVisibleMenu, showMenu } = useContext(MenuContext);
  const { requests, approver } = useUrl();

  const { user = {} } = useUser();
  const {
    email,
    user_metadata: { fullName },
  } = user;

  return (
    <aside
      className={`big:w-72 big:flex big:flex-col big:backdrop-blur-none big:relative z-20 fixed top-0 gap-12 h-full w-screen backdrop-blur-sm  ${
        isVisibleMenu ? "block" : "hidden"
      }`}
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
            name={approver ? fullName : "Employer"}
            className="flex-col"
          >
            <p className="lowercase text-gray-500">{email}</p>
          </UserAvatar>
        </div>

        {approver && <MainNav />}
        {requests && <MainNavEmployer />}
      </div>
    </aside>
  );
}

export default SideBar;
