import Card from "../Card";
import Popup from "../Popup";

function ScreenApprove() {
  return (
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
          />
          <Card
            title="Vacation"
            userName="@maatBakari"
            location="Nigéria"
            dateStart="23/04/2024"
            dateEnd="23/05/2024"
          />
        </div>
        <Popup />
      </div>
    </section>
  );
}

export default ScreenApprove;
