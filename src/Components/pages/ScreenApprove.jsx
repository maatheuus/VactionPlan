import { useContext } from "react";
import { ModalContext } from "../context/modal-context";

import Card from "../Card";
import Header from "../Header";
import { FAKE_USERS } from "../../FAKE_USERS";

function ScreenApprove() {
  const { clickView } = useContext(ModalContext);

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
            {FAKE_USERS.map((value) => {
              return (
                <Card
                  key={value.id}
                  title="Vacation"
                  userName={value.userName}
                  location={value.location}
                  dateStart={value.startDate}
                  dateEnd={value.endDate}
                  onClick={() => clickView("approve", value.id)}
                  id={value.id}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ScreenApprove;
