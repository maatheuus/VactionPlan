import { useNavigate, Outlet } from "react-router-dom";

import Header from "../Header";
import Button from "../Button";
import ReadRequests from "../ReadRequests";

function Request() {
  const navigate = useNavigate();

  function handleNewRequest() {
    navigate("./newRequest");
  }

  const emptyRequests = false;

  return (
    <>
      <Header />

      <section className="request">
        <Outlet />
        <div className="request__content">
          <h1 className="request__title">Solicitações</h1>
          <div className="request__cards">
            {emptyRequests ? (
              <p>No requests yet</p>
            ) : (
              <ReadRequests currentPage="request" />
            )}
          </div>
        </div>
        <div className="request__button">
          <Button className="request__button--new" onClick={handleNewRequest}>
            Nova solicitação
          </Button>
        </div>
      </section>
    </>
  );
}

export default Request;
