import "./App.scss";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
//import RadioButtons from "./components/RadioButtons/RadioButtons";
import { useState, useEffect } from "react";

//import Main from "./containers/Main/Main"

const App = () => {
  const [beers, setBeers] = useState([]);
  // const [filter, setFilter] = useState("all");

  const getBeers = async () => {
    const arr = [];
    for (let i = 1; i < 6; i++) {
      const url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;
      const response = await fetch(url);
      const data = await response.json();
    
      Array.prototype.push.apply(arr, data);
    }
    setBeers(arr);

  };

  //search by entering letters into searchbox
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerLower = beer.name.toLowerCase();
    return beerLower.includes(searchTerm);
  });


  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <div className="app">
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
        {/* <RadioButtons
          label="Filter by:"
          options={["All", "ABV (>6.0%)", "Range (Brewed before 2010)", "Acidic pH (< 4)"]}
          onChange={handleRadioChange}
          selected={filter}
        /> */}
        <CardList beers={filteredBeers} />
      </div>
    </>
  );
};

export default App;
