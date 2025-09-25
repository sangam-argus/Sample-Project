import Cards from "../components/Cards/Cards";
import type { Receipe } from "../util/Constant";
import "./Home.css";
import useGlobalContext from "../hooks/useGlobalContext";

function Favourites() {
  const { favourite, receipe } = useGlobalContext();

  if (favourite.length === 0 || receipe.length === 0) {
    return <p>No Favourites</p>;
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
