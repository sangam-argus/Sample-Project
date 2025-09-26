import "../Button/Button.css"
import type { Receipe } from "../../util/Constant";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Cards.css";
function Cards({ item }: { item: Receipe }) {
  const navigate = useNavigate();
  const [loading,setLoading]=useState(true)
  const { image, name } = item;
return (
    <div className="card">
     <div style={{ "borderRadius": "10px"}}>
          {loading && <div className="loading">Loading...</div>}
          <img
            src={image}
            alt={name}
            className={loading ? "hidden" : ""}
            onLoad={() => setLoading(false)}
          />
          
        </div>

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
