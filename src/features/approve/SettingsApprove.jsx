import { FaFilePdf, FaUserPlus } from "react-icons/fa";

import { useRequests } from "../requests/useRequests";
import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";
import generatePdfUsers from "../../services/generatePdf";

function SettingsApprove() {
  const { requests } = useRequests();

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
      </div>
    </div>
  );
}

export default SettingsApprove;
