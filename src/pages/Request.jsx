import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaPlus } from "react-icons/fa";

import Button from "../ui/Button";
import ReadRequests from "../ui/ReadRequests";

function Request() {
  const navigate = useNavigate();
  return (
    <section className="request">
      <Button onClick={() => navigate("/")}>
        <FaArrowCircleLeft className="arrow-left" />
      </Button>
      <div className="request__content">
        <h1 className="request__title lalezar-regular ">Requests</h1>
        <div className="request__cards">
          <ReadRequests currentPage="request" />
        </div>
      </div>
      <div className="request__button">
        <Button to="/newRequest" className="request__button--new">
          <FaPlus />
        </Button>
      </div>
    </section>
  );
}

export default Request;
