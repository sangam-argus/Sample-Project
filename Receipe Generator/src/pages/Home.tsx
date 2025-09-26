import Cards from "../components/Cards/Cards";
import type { Receipe } from "../util/Constant";
import "./Home.css";
import useGlobalContext from "../hooks/useGlobalContext";
import { centerText } from "../util/style";

function Home() {
  const { receipe, loading } = useGlobalContext();

  if (loading) {
    return (
      <div style={centerText}>
        <h2>Loading Please wait ....</h2>
      </div>
    );
  }
  return (
    <>
      {receipe && receipe.length > 0 ? (
        <div className="cardsContainer">
          {receipe.map((item: Receipe) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div style={centerText}>
          <h2>Nothing to show Please search something....</h2>
        </div>
      )}
    </>
  );
}

export default Home;
