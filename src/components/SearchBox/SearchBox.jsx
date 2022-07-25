import "./SearchBox.scss";

const SearchBox = ({ searchTerm, handleInput }) => {
  return (
    <form className="search-box">
      <input
        type="text"
        placeholder="Search beers"
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBox;
