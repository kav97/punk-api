import "./CardList.scss";
import Card from "../../components/Card/Card";

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

  return (
    <div className="card-list">
      {beers.length > 0 ? (
        cardListJSX
      ) : (
        <p className="card-list__no-display">
          Sorry, no beers are displayed with that search.
        </p>
      )}
    </div>
  );
};

export default CardList;