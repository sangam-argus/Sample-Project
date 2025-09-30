import Cards from "../components/Cards/Cards";
import type { Receipe } from "../util/Constant";
import "./Home.css";
import { centerText } from "../util/style";

function Favourites({favourite,recipe}:{favourite:Receipe[],recipe:Receipe[]}) {
  if (favourite.length === 0 || recipe.length === 0) {
    return (
      <div style={centerText}>
        <h2>No Favourites, Please mark some items as favourite</h2>
      </div>
    );
  }
  return (
    <div className="cardsContainer">
      {favourite.map((item: Receipe) => (
        <Cards item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Favourites;
