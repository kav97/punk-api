import "./FilterItem.scss";
const FilterItem = ({ handleFilter,label }) => {
    return (
        <form className="filters-box">
        <label
          htmlFor="filter"
          className="filters-box__label">
          {label}
        </label>
  
        <input
          className="filters-box__checkbox"
          type="checkbox"
          onChange={handleFilter}
        />
        </form>
    )
};
  
export default FilterItem;