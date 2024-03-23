import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AuthContext } from "./context/authUser-context";
import { FaFilePdf } from "react-icons/fa";

import image from "../assets/images/buzzel-logo.png";
import ListNav from "./ListNav";
import Button from "./Button";
import generatePdf from "../generatePdf";
import { FilterContext } from "./context/filterRequests-context";

function Header() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const { requests } = useContext(FilterContext);

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="header">
      <div className="content-header">
        <div className="content-header__logo">
          <img src={image} alt="logo header" />
        </div>
        <div className="content-header__content-buttons">
          <nav className="nav">
            <ListNav />
          </nav>
        </div>

        <div className="buttons-header">
          <div className="content-header__button">
            <Button
              className="content-header__button--pdf"
              onClick={() => generatePdf(requests)}
            >
              <FaFilePdf className="pdf" />
              <span>Make the pdf</span>
            </Button>
          </div>
          <div className="content-header__button">
            <Button
              className="content-header__button--back"
              onClick={handleLogout}
            >
              <FaArrowLeft className="arrow" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
