import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ModalContext } from "../context/modal-context";
import { RequestContext } from "../context/users-datas-context";

import Header from "../Header";
import Card from "../Card";
import Button from "../Button";
function Request() {
  const { readRequest } = useContext(RequestContext);

  const navigate = useNavigate();
  const [userRequest, setUserRequest] = useState([]);

  const { clickView } = useContext(ModalContext);

  function handleNewRequest() {
    navigate("./newRequest");
  }

  useEffect(() => {
    readRequest().then((data) => setUserRequest(data));
  }, [readRequest]);

  const emptyRequests = userRequest.length === 0;

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
              userRequest.map((value) => {
                return (
                  <Card
                    key={value.id}
                    title="Vacation"
                    curRequest={value}
                    onClick={() => clickView("request", value.id)}
                  />
                );
              })
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
