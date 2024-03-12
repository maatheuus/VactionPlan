import Button from "./Button";

function Popup() {
  return (
    <div className="popup">
      <div className="popup__content">
        <h2 className="popup__title">Vacation</h2>
        <div className="popup__content-information">
          <p className="popup__name">
            UserName:
            <span className="popup__name--user"></span>
          </p>
          <p className="popup__location">
            Location:
            <span className="popup__location--name"></span>
          </p>

          <p className="popup__date">
            Date requested:
            <span className="popup__date--start">start: 20/05/2002</span>
            <span className="popup__date--end">end: 20/05/2002</span>
          </p>
          <p className="popup__observation">
            Observation: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quos tempora ratione voluptatum maxime omnis id ducimus,
            placeat quaerat accusamus blanditiis odit repellendus quas similique
            minima nulla nisi fugit vel dolorem?
          </p>
        </div>
        <div className="popup__content-buttons">
          <Button className="popup__content-buttons--aprove">Aprove</Button>
          <Button className="popup__content-buttons--deny">Deny</Button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
