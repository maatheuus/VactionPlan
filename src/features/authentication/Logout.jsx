import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import { LogOut as LogOutIcon, Loader } from "lucide-react";

function Logout({ label, className }) {
  const { isLoading, logout } = useLogout();
  return (
    <ButtonIcon
      type="secondary"
      className={className}
      disabled={isLoading}
      onClick={logout}
    >
      {isLoading ? (
        <Loader className="animate-spin mx-auto" />
      ) : (
        <>
          <LogOutIcon /> <span>{label}</span>
        </>
      )}
    </ButtonIcon>
  );
}

export default Logout;
