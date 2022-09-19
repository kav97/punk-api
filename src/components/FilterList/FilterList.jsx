import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({ handleAbvCheckbox, handleBrewedCheckbox, handlePhCheckbox} ) => {

  return (
    <div className="filters">
      <FilterItem label={ "Acidity pH < 4" } handleFilter={ handlePhCheckbox } className="filters__item"/>
      <FilterItem label={ "High ABV (>6.0%)" } handleFilter={ handleAbvCheckbox } className="filters__item"/>
      <FilterItem label={ "Classic Range (before 2010)"} handleFilter={ handleBrewedCheckbox } className="filters__item"/>
    </div>
  )
};

export default FilterList;