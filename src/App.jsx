import './App.scss';
//import beers from './data/beers';
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox';
import { useState, useEffect } from "react";


const App = () => { 

  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data = await response.json();

    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, [])
  
  //console.log(beers);

  //search by entering letters into searchbox
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter(beer => {
    const beerLower = beer.name.toLowerCase();
    return beerLower.includes(searchTerm);
  })

  return (
    <>
      <div className="app">
        <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
        <CardList beers={filteredBeers} />
      </div>
    </>
  );
}

export default App;
