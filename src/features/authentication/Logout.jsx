import { useLogout } from "./useLogout";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

import SpinnerMini from "../../ui/SpinnerMini";
import styled from "styled-components";

const ButtonIcon = styled.button`
  position: absolute;
  left: 4.5rem;
  top: 4rem;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const styleIcon = {
  width: "3rem",
  height: "4rem",
};

function Logout() {
  const { isLoading, logout } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <HiArrowLeftOnRectangle style={styleIcon} />
      ) : (
        <SpinnerMini style={{ color: "var(--color-black-primary)" }} />
      )}
    </ButtonIcon>
  );
}

export default Logout;
