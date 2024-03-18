import { useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";

import Input from "../Input";
import Button from "../Button";
import { RequestContext } from "../context/users-datas-context";

function NewRequest() {
  const navigate = useNavigate();
  const { newRequest } = useContext(RequestContext);

  const nameRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const observationRef = useRef();

  function handleNewRequest() {
    const userData = {
      userName: nameRef.current.value,
      location: locationRef.current.value,
      dateStart: startRef.current.value,
      dateEnd: endRef.current.value,
      observation: observationRef.current.value,
    };

    const getDate =
      new Date(userData.dateEnd).getDate() -
      new Date(userData.dateStart).getDate();
    const getMonth =
      new Date(userData.dateEnd).getMonth() -
      new Date(userData.dateStart).getMonth();
    console.log(getDate, getMonth);

    // se o dia for maior que 30 ou o mes for maior que 1, erro
    if ((-getDate < 0 && getMonth >= 1) || getMonth > 1)
      console.log("precisa ser menor menor ou igual a 30 dias");
    // se o dia for numero negativo ou o mes for numero negativo, erro
    else if (
      (-getDate > 0 && getMonth === 0) ||
      (-getDate >= 0 && getMonth < 0) ||
      (-getDate < 0 && getMonth < 0)
    )
      console.log("precisa ser maior que a data selecionada");
    // se o ano for diferente do atual, erro
    else if (
      new Date(userData.dateStart).getFullYear() !==
      new Date(userData.dateEnd).getFullYear()
    )
      console.log("precisa ser no mesmo ano");
    else {
      newRequest(userData);
      navigate(-1);
    }
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
                  onClick={handleNewRequest}
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
