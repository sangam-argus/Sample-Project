import Cards from "../components/Cards/Cards";
import type { Receipe } from "../util/Constant";
import "./Home.css";
import useGlobalContext from "../hooks/useGlobalContext";

function Home() {
  const { receipe,loading }=useGlobalContext()

  if(loading){
    return <h2>Loading Please wait ....</h2>
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
        <h2>Nothing to show Please search something....</h2>
      )}
    </>
  );
}

export default Home;
