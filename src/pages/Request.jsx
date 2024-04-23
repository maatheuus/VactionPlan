import { useNavigate, Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Button from "../ui/Button";
import ReadRequests from "../ui/ReadRequests";

function Request() {
  const navigate = useNavigate();

  function handleNewRequest() {
    navigate("/newRequest");
  }

  return (
    <>
      <Header />

      <section className="request">
        <Outlet />
        <div className="request__content">
          <h1 className="request__title lalezar-regular ">Requests</h1>
          <div className="request__cards">
            <ReadRequests currentPage="request" />
          </div>
        </div>
        <div className="request__button">
          <Button
            className="request__button--new lalezar-regular "
            onClick={handleNewRequest}
          >
            New request
          </Button>
        </div>
      </section>
    </>
  );
}

export default Request;
