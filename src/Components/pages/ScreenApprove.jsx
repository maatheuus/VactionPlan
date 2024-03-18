import { useContext, useState, useEffect } from "react";
import { ModalContext } from "../context/modal-context";
import { RequestContext } from "../context/users-datas-context";

import Card from "../Card";
import Header from "../Header";

function ScreenApprove() {
  const { clickView } = useContext(ModalContext);
  const { readRequest } = useContext(RequestContext);
  const [userRequest, setUserRequest] = useState([]);

  // const emptyRequests = userRequest.length === 0;

  useEffect(() => {
    readRequest().then((data) => setUserRequest(data));
  }, [readRequest]);

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
            {userRequest.map((value) => {
              return (
                <Card
                  key={value.id}
                  title="Vacation"
                  curRequest={value}
                  onClick={() => clickView("approve", value.id)}
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
