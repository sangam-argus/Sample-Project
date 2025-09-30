import Cards from "../components/Cards/Cards";
import "./Home.css";
import { centerText } from "../util/style";
import type { Receipe } from "../util/Constant";

type HomeProps={
  loading:Boolean,
  recipe:Receipe[]
}
const Home:React.FC<HomeProps>=({loading,recipe})=> {
 
  if (loading) {
    return (
      <div style={centerText}>
        <h2>Loading Please wait ....</h2>
      </div>
    );
  }
  return (
    <>
      {recipe && recipe.length > 0 ? (
        <div className="cardsContainer">
          {recipe.map((item: Receipe) => (
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
