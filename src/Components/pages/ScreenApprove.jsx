import { useState } from "react";
import Card from "../Card";
import Header from "../Header";
import Popup from "../Popup";

function ScreenApprove() {
  const [isHidden, setIsHidden] = useState(true);
  const hidden = "hidden";

  function handleOpenModal() {
    setIsHidden(!isHidden);
  }

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
              onClick={handleOpenModal}
            />
            <Card
              title="Vacation"
              userName="@maatBakari"
              location="Nigéria"
              dateStart="23/04/2024"
              dateEnd="23/05/2024"
              onClick={handleOpenModal}
            />
          </div>
          <Popup isHidden={isHidden ? hidden : ""} onClick={handleOpenModal} />
        </div>
      </section>
    </>
  );
}

export default ScreenApprove;
