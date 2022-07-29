import "./App.scss";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";
//import FilterList from "./components/FilterList/FilterList";
//import FilterItem from "./components/FilterItem/FilterItem";
import { useState, useEffect } from "react";

//import Main from "./containers/Main/Main"

const App = () => {
  const [beers, setBeers] = useState([]);
  
  const getBeers = async () => {
    const beersArray = [];
    for (let i = 1; i <= 5; i++) {
      const url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80`;
      const response = await fetch(url);
      const data = await response.json();
    
      Array.prototype.push.apply(beersArray, data);
    }
    setBeers(beersArray);

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

  //filter by ph < 4
 // const [phFilter, setPhFilter] = useState(false);

  // const handleCheckBox = (event) => {
  //   setPhFilter(event.target.value)
  // }
  
  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
        <CardList beers={filteredBeers} />
      </div>
    </>
  );
};

export default App;
