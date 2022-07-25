import './App.scss';
//import beers from './data/beers';
import CardList from './components/CardList/CardList'
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
  
  console.log(beers);

  return (
    <>
      <div className="app">
        <CardList beers={beers} />
      </div>
    </>
  );
}

export default App;
