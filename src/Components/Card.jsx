function Card({ title }) {
  return (
    <div className="card">
      <div className="card__information">
        <h1 className="card__title">{title}</h1>
        <p className="card__username"></p>
        <p className="card__department"></p>
        <p className="card__location"></p>
        <div className="card__date">
          <p className="card__date-text"></p>
          <p className="card__date-start"></p>
          <p className="card__date-end"></p>
        </div>
        <div className="card__information-status">
          <span className="ball red"></span>
          <span>status</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
