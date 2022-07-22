import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ beers }) => {
  const cardListJSX = beers.map((beer) => (
    <Card
      key={beer.id}
      name={beer.name}
      img={beer.image_url}
      abv={beer.abv}
      ph={beer.ph}
      year={beer.first_brewed}
      description={beer.description}
    />
  ));

  return <div className="card-list">{cardListJSX}</div>;
};

export default CardList;