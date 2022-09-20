import "./App.scss";
import CardList from "./containers/CardList/CardList"
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";
import FilterList from "./components/FilterList/FilterList";
import { useState, useEffect } from "react";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abv, setAbv] = useState("");
  const [brewed, setBrewed] = useState("");
  const [ph, setPh] = useState(false);

  const getBeers = async () => {
    try {
      const beersArray = [];
      for (let i = 1; i <= 5; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${i}&per_page=80&${abv}&${brewed}`);

        if (response.status !== 200) throw new Error("Cannot connect to API")

        const beerData = await response.json();
        Array.prototype.push.apply(beersArray, beerData);
      }
  
      if (ph === true) setBeers(beersArray.filter(beer => beer.ph < 4))
      else setBeers(beersArray)
    }
    catch(error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getBeers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abv, brewed, ph])

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerLower = beer.name.toLowerCase();
    return beerLower.includes(searchTerm);
  });

  const handleAbvCheckbox = (event) => {
    if (event.target.checked === true) {
      setAbv("abv_gt=6");
      return;
    }
    setAbv("");
  }

  const handleBrewedCheckbox = (event) => {
    if (event.target.checked === true) {
      setBrewed("brewed_before=01/2010");
      return;
    }
    setBrewed("");
  }

  const handlePhCheckbox = (event) => {
    if (event.target.checked === true) {
      setPh(true);
      return;
    }
    setPh(false);
  }

  return (
    <div className="app">
      <Header />
      <SearchBox handleInput={handleInput} searchTerm={searchTerm} />
      <FilterList handleAbvCheckbox={handleAbvCheckbox} handleBrewedCheckbox={handleBrewedCheckbox} handlePhCheckbox={handlePhCheckbox}/>
      <CardList beers={filteredBeers} />
    </div>
  );
};

export default App;