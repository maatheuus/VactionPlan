import Input from "../Input";
import Button from "../Button";

function ScreenEmployee() {
  return (
    <section id="employee">
      <div className="screen-employee">
        <h1 className="screen-employee__title">Solicitação de férias</h1>

        <div className="screen-employee__inputs input">
          <div className="screen-employee__inputs--col1">
            <Input label="User name" type="text" />
            <Input label="Location" type="text" />

            <Input label="Observações" type="textarea" />
          </div>

          <div className="screen-employee__inputs--col2">
            <Input label="Data Inicio" type="date" />
            <Input label="Date fim" type="date" />

            <div className="screen-employee__button">
              <Button className="screen-employee__button--send">
                Enviar solicitação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScreenEmployee;
