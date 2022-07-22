import "./Card.scss";

const Card = ({name, img, abv, description }) => {
    return (
        <div className="card">
            <img className="card__img" src={img} alt={name} />
            <div className="card-content">
                <h2 className="card-content__name">{name}</h2>
                <p className="card-content__abv">ABV:{abv}%</p>
                <p className="card-content__description">{description}</p>
            </div>
        </div>
    )
}

export default Card;