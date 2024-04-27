import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaFilePdf, FaUserPlus } from "react-icons/fa";

import { AuthContext } from "../../context/authUser-context";
import { useRequests } from "../requests/useRequests";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";
import generatePdfUsers from "../../services/generatePdf";

function SettingsApprove() {
  const [isLogout, setIsLogout] = useState(false);
  const { requests } = useRequests();
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogout) {
      logout();
      navigate("/");
    }
  }, [navigate, logout, isLogout]);

  return (
    <div className="buttons-settings">
      <div className="buttons-header">
        <div className="content-header__button">
          <Button to="register">
            <FaUserPlus
              style={{
                width: "3.5rem",
                height: "2.4rem",
                margin: "0 1rem",
              }}
            />
          </Button>
        </div>

        <div className="content-header__button">
          <ButtonIcon
            onClick={() => generatePdfUsers(requests)}
            style={{ backgroundColor: "black" }}
            icon={<FaFilePdf style={{ fill: "white" }} />}
          />
        </div>

        <div className="content-header__button">
          <ButtonIcon
            onClick={() => setIsLogout(true)}
            style={{ backgroundColor: "black" }}
            icon={<FaArrowCircleLeft style={{ fill: "white" }} />}
            label="Logout"
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsApprove;
