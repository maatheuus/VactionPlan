import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

import Card from "../Card";
import Header from "../Header";
import Popup from "../Popup";
import Button from "../Button";

function ScreenApprove() {
  const { clickView, hiddenModal, isHidden } = useContext(ModalContext);
  const hidden = "hidden";

  return (
    <>
      <Header />
      <section id="approve">
        <div className="screen-approve">
          <div className="screen-approve__button">
            <span className="ball red"></span>
            <span className="ball green"></span>
            <span className="ball orange"></span>
            All
          </div>

          <div className="content-cards">
            <Card
              title="Vacation"
              userName="@maatBakari"
              location="Nigéria"
              dateStart="23/04/2024"
              dateEnd="23/05/2024"
              onClick={() => clickView("approve")}
            />
            <Card
              title="Vacation"
              userName="@maatBakari"
              location="Nigéria"
              dateStart="23/04/2024"
              dateEnd="23/05/2024"
              onClick={() => clickView("approve")}
            />
          </div>
          <Popup
            isHidden={isHidden ? hidden : ""}
            onClick={() => hiddenModal("hidden")}
          >
            <div className="buttons">
              <Button className="popup__content-buttons--aprove button-popup">
                Aprove
              </Button>
              <Button className="popup__content-buttons--deny button-popup">
                Deny
              </Button>
            </div>
          </Popup>
        </div>
      </section>
    </>
  );
}

export default ScreenApprove;
