import "./Cards.css";
import type { Receipe } from "../util/Constant";
import { useNavigate } from "react-router-dom";
function Cards({ item }: { item: Receipe }) {
  const navigate = useNavigate();
  const { image, name } = item;
console.log("hello")  
return (
    <div className="card">
      <img src={image} width={100} />

      <p>{name}</p>
      <button
        onClick={() => {
          navigate("/details", {
            state: {
              item: item,
            },
          });
        }}
      >
        {" "}
        Receipe Detail{" "}
      </button>
    </div>
  );
}

export default Cards;
