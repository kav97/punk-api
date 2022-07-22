import './App.scss';
import beers from './data/beers';
import CardList from './components/CardList/CardList'
console.log(beers);

const App = () => { 
  return (
    <>
      <div className="app">
        <CardList beers={beers} />
      </div>
    </>
  );
}

export default App;
