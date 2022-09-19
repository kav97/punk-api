import "./FilterList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FilterList = ({ handleAcidityFilter} ) => {

  return (
    <div className="filters">
      <FilterItem label={ "Acidity pH < 4" } handleFilter={ handleAcidityFilter} className="filters__item"/>
      {/* <FilterItem label={ "High ABV (>6.0%)" } handleFilter={ handleABVFilter} className="filters__item"/>
      <FilterItem label={ "Classic Range (before 2010)"} handleFilter={ handleClassicFilter} className="filters__item"/> */}
    </div>
  )
};

export default FilterList;