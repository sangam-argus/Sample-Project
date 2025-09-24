import React, { useContext } from "react";
import { GlobalContext } from "../context/AppContext";
import Cards from "../components/Cards";
import type { Receipe } from "../util/Constant";
import './Home.css'

function Home() {
  const { receipe, searchString } = useContext(GlobalContext);
  return (
    <>
      {searchString ? (
        <>
        {receipe && receipe.length>0 ? <div className="cardsContainer">
            {receipe.map((item:Receipe)=>
                <Cards key={item.id} item={item}/>
            )}
        </div> : <h2>No Results Found....</h2>}</>
      ) : (
        <h2>Nothing to show here !! Please Search Something....</h2>
      )}
    </>
  );
}

export default Home;
