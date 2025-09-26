import "./SearchBar.css";
import useGlobalContext from "../../hooks/useGlobalContext";
function SearchBar() {
  const { searchString, setSearchString, handleSubmit } = useGlobalContext();

  return (
  
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type="text"
          name="Search"
          placeholder="Search.."
          className="searchBar"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type="submit" >Go</button>
      </div>
      </form>

  );
}

export default SearchBar;
