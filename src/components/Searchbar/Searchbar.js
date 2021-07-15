import "./Searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => (
  <form className="search_bar" action="/searches" method="get">
    <button className="button" type="submit">
      <FontAwesomeIcon icon="search" />
    </button>
    <label htmlFor="header-search">
      <span className="visually-hidden"></span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search prolio posts"
      className="search"
    />
  </form>
);

export default SearchBar;
