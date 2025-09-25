import "./Cards.css";
import "../Button/Button.css"
import type { Receipe } from "../../util/Constant";
import { useNavigate } from "react-router-dom";
function Cards({ item }: { item: Receipe }) {
  const navigate = useNavigate();
  const { image, name } = item;
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
        <span className="buttonTop">Receipe Detail</span>
        
        
      </button>
    </div>
  );
}

export default Cards;
