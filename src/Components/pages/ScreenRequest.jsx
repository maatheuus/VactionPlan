import Card from "../Card";
import Button from "../Button";

function ScreenRequest() {
  return (
    <section className="request">
      <div className="request__content">
        <h1 className="request__title">Solicitações</h1>
        <div className="request__cards">
          <Card title="30 dias" dateStart="23/04/2024" dateEnd="23/05/2024" />
          <Card title="30 dias" dateStart="23/04/2024" dateEnd="23/05/2024" />
        </div>
      </div>
      <div className="request__button">
        <Button className="request__button--new">Nova solicitação</Button>
      </div>
    </section>
  );
}

export default ScreenRequest;
