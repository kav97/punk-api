import "./FilterItem.scss";
const FilterItem = ({ handleFilter,label }) => {
    return (
      <form>
        <div className="filters-box">
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
        </div>
      </form>
    )
};
  
export default FilterItem;