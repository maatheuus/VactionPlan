import { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ModalContext } from "../context/modal-context";

import Header from "../Header";
import Card from "../Card";
import Button from "../Button";
import Popup from "../Popup";

function Request() {
  const navigate = useNavigate();

  const { clickView, hiddenModal, isHidden } = useContext(ModalContext);
  const hidden = "hidden";

  function handleNewRequest() {
    navigate("./newRequest");
  }

  return (
    <>
      <Header />

      <section className="request">
        <Outlet />
        <div className="request__content">
          <h1 className="request__title">Solicitações</h1>
          <div className="request__cards">
            <Card
              title="30 dias"
              dateStart="2024/04/25"
              dateEnd="2024/05/23"
              onClick={() => clickView("request")}
            />
            <Card
              title="30 dias"
              dateStart="2024/04/25"
              dateEnd="2024/05/23"
              onClick={() => clickView("request")}
            />
          </div>
        </div>
        <div className="request__button">
          <Button className="request__button--new" onClick={handleNewRequest}>
            Nova solicitação
          </Button>
        </div>
        <Popup
          isHidden={isHidden ? hidden : ""}
          onClick={() => hiddenModal("hidden")}
        >
          <div className="buttons">
            <Button className="popup__content-buttons--aprove button-popup">
              Update
            </Button>
            <Button className="popup__content-buttons--deny button-popup">
              Delete
            </Button>
          </div>
        </Popup>
      </section>
    </>
  );
}

export default Request;
