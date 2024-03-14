import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import Input from "../Input";
import Button from "../Button";
import Header from "../Header";
import ScreenRequest from "./ScreenRequest";
import Card from "../Card";

function ScreenEmployee() {
  const nameRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const observationRef = useRef();

  function handleTeste() {
    const userData = {
      userName: nameRef.current.value,
      location: locationRef.current.value,
      date: {
        start: startRef.current.value,
        end: endRef.current.value,
      },
      observation: observationRef.current.value,
    };

    const date = new Date(userData.date.start);
    const day = date.getDate();
    const month = date.getDate() + 1;
    const year = date.getFullYear();

    userData.date.end = new Date(day, month + 1, year);

    console.log(userData.date);
  }

  return (
    <>
      <Header />
      <section id="employee">
        <div className="screen-employee">
          <h1 className="screen-employee__title">Solicitação de férias</h1>

          <div className="screen-employee__inputs input">
            <div className="screen-employee__inputs--col1">
              <Input label="User name" innerRef={nameRef} />
              <Input label="Location" type="text" innerRef={locationRef} />

              <Input
                label="Observações"
                type="textarea"
                innerRef={observationRef}
              />
            </div>

            <div className="screen-employee__inputs--col2">
              <Input label="Data Inicio" type="date" innerRef={startRef} />
              <Input label="Data fim" type="date" innerRef={endRef} />

              <div className="screen-employee__button">
                <Button
                  onClick={handleTeste}
                  className="screen-employee__button--send"
                >
                  Enviar solicitação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ScreenEmployee;
