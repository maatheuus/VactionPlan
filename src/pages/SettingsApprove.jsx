import { FaArrowCircleLeft, FaFilePdf, FaUserPlus } from "react-icons/fa";
import generatePdfUsers from "../services/generatePdf";

import { AuthContext } from "../context/authUser-context";
import { useContext, useEffect, useState } from "react";
import { useRequests } from "../hooks/useRequests";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function SettingsApprove() {
  const [isLogout, setIsLogout] = useState(false);
  const { requests } = useRequests();

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
    setIsLogout(true);
  }

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
          <Button to="register" style={{ cursor: "pointer" }}>
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
          <Button
            className="content-header__button--pdf"
            onClick={() => generatePdfUsers(requests)}
            style={{ backgroundColor: "black" }}
          >
            <FaFilePdf className="pdf" />
          </Button>
        </div>

        <div className="content-header__button">
          <Button
            className="content-header__button--back"
            onClick={handleLogout}
          >
            <FaArrowCircleLeft className="arrow" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsApprove;
