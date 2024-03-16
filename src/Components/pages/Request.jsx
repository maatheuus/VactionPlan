import { useContext, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ModalContext } from "../context/modal-context";

import Header from "../Header";
import Card from "../Card";
import Button from "../Button";
import { FAKE_USERS } from "../../FAKE_USERS";
import supabase from "../../supabase";

function Request() {
  const navigate = useNavigate();
  const [user, setUser] = useState(FAKE_USERS);

  // async function handleData() {
  //   // const { data, error } = await supabase.from("VactionUsers").select("*");

  //   // console.log(data, error);

  //   const { error, data } = await supabase
  //     .from("VactionUsers")
  //     .insert({ id: 1, name: "Denmark" });

  //   console.log(data);
  // }
  // handleData();

  function handleUpdateUser(result) {
    setUser(result);
  }

  const { clickView } = useContext(ModalContext);

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
            {user.map((value) => {
              return (
                <Card
                  key={value.id}
                  title="Vacation"
                  curUser={user}
                  userName={value.userName}
                  location={value.location}
                  dateStart={value.startDate}
                  dateEnd={value.endDate}
                  updateUsers={handleUpdateUser}
                  onClick={() => clickView("request", value.id)}
                  id={value.id}
                />
              );
            })}
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
