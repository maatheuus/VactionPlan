import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import Input from "../Input";
import Button from "../Button";

const dataUser = [];

function NewRequest() {
  const navigate = useNavigate();

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
        start: new Date(startRef.current.value),
        end: new Date(endRef.current.value),
      },
      observation: observationRef.current.value,
    };

    const getDate =
      -userData.date.end.getDate() - -userData.date.start.getDate();
    const getMonth =
      userData.date.end.getMonth() + 1 - (userData.date.start.getMonth() + 1);
    console.log(getDate, getMonth);

    // se o dia for maior que 30 ou o mes for maior que 1, erro
    if ((getDate < 0 && getMonth >= 1) || getMonth > 1)
      console.log("precisa ser menor menor ou igual a 30 dias");
    // se o dia for numero negativo ou o mes for numero negativo, erro
    else if (
      (getDate > 0 && getMonth === 0) ||
      (getDate >= 0 && getMonth < 0) ||
      (getDate < 0 && getMonth < 0)
    )
      console.log("precisa ser maior que a data selecionada");
    // se o ano for diferente do atual, erro
    else if (
      userData.date.start.getFullYear() !== userData.date.end.getFullYear()
    )
      console.log("precisa ser no mesmo ano");
    else navigate(-1);

    dataUser.push(userData);
    console.log(dataUser);
  }

  return (
    <>
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

export default NewRequest;
