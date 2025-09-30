import "./Header.css";
import { Link } from "react-router-dom";


type HeaderProps={
search:string,
setSearch:React.Dispatch<React.SetStateAction<string>>,
handleSubmit:(e:React.FormEvent)=>{}
}
const Header:React.FC<HeaderProps>=({search,setSearch,handleSubmit}) =>{

  return (
    <div className="headerContainer">
      <h3 className="appName">
        {" "}
        <Link to={"/"} className="linksStyle">
          Food Receipes
        </Link>{" "}
      </h3>
      <div>
        <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            name="Search"
            placeholder="Search.."
            className="searchBar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" >Go</button>
        </div>
        </form>
      </div>

      <ul className="navlinks">
        <li>
          <Link to={"/"} className="linksStyle">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/favourites"} className="linksStyle">
            Favourite
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
