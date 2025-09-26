import Cards from "../components/Cards/Cards";
import type { Receipe } from "../util/Constant";
import "./Home.css";
import useGlobalContext from "../hooks/useGlobalContext";
import { centerText } from "../util/style";

function Favourites() {
  const { favourite, receipe } = useGlobalContext();

  if (favourite.length === 0 || receipe.length === 0) {
    return (
      <div
        style={centerText}
      >
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
