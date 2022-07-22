import "./Card.scss";
import { useState } from "react";

const Card = ({ name, img, abv, ph, year, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  const cardFrontJSX = (
    <>
      <img className="card__img" src={img} alt={name} />
      <h2 className="card__name">{name}</h2>
      <div className="card-content">
        <p className="card-content__year"><b>First Brewed:</b> {year}</p>
        <p className="card-content__abv"><b>ABV:</b> {abv}%</p>
        <p className="card-content__ph"><b>pH:</b> {ph}</p>
      </div>
    </>
  );

  const cardBackJSX = (
    <div className="card-back">
      <p className="card-back__description">{description}</p>
    </div>
  );

  return (
    <div className="card" onClick={handleClick}>
      {showInfo ? cardBackJSX : cardFrontJSX}
    </div>
  );
};

export default Card;