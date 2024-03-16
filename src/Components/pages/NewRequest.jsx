import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import Input from "../Input";
import Button from "../Button";
import { FAKE_USERS } from "../../FAKE_USERS";

function NewRequest() {
  const navigate = useNavigate();

  const nameRef = useRef();
  const locationRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const observationRef = useRef();

  function handleValueUser() {
    const userData = {
      id: 8,
      userName: nameRef.current.value,
      location: locationRef.current.value,
      startDate: startRef.current.value,
      endDate: endRef.current.value,
      observation: observationRef.current.value,
    };

    // const getDate = -userData.endDate.getDate() - -userData.startDate.getDate();
    // const getMonth =
    //   userData.endDate.getMonth() + 1 - (userData.startDate.getMonth() + 1);

    /*
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
      userData.startDate.getFullYear() !== userData.endDate.getFullYear()
    )
      console.log("precisa ser no mesmo ano");
    else navigate(-1);*/

    navigate(-1);
    return FAKE_USERS.push(userData);
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
                  onClick={handleValueUser}
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
