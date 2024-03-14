import Button from "./Button";

function Popup({ isHidden = true, onClick }) {
  return (
    <div className={`popup ${isHidden} `}>
      <div className="popup__content">
        <h2 className="popup__title">Vacation</h2>
        <div className="popup__content-information">
          <div className="popup__name">
            <p className="popup__name--text">
              UserName: <span className="popup__name--span">Maat</span>
            </p>
          </div>
          <div className="popup__location">
            <p className="popup__location--text">
              Location: <span className="popup__location--span">Angola</span>
            </p>
          </div>

          <div className="popup__date">
            <p className="popup__date--text">
              Date requested:{" "}
              <span className="popup__date--start">start: 20/05/2002</span>
              <span className="popup__date--end">end: 20/05/2002</span>
            </p>
          </div>
          <div className="popup__observation">
            <p className="popup__observation--text">
              Observation:{" "}
              <span className="popup__observation--span">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                tempora ratione voluptatum maxime omnis id ducimus, placeat
                quaerat accusamus blanditiis odit repellendus quas similique
                minima nulla nisi fugit vel dolorem?
              </span>
            </p>
          </div>
        </div>
        <div className="popup__content-buttons button-popup">
          <div className="popup__content-button ">
            <Button
              onClick={onClick}
              className="popup__content-button--close button-popup"
            >
              Close
            </Button>
          </div>

          <div className="buttons">
            <Button className="popup__content-buttons--aprove button-popup">
              Aprove
            </Button>
            <Button className="popup__content-buttons--deny button-popup">
              Deny
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
