import { useContext,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../context/AppContext';

function CardDescription() {
  const {favourite,handleFavourites}=useContext(GlobalContext)

  const location=useLocation();
  const receipeData=location.state.item
  const {image,rating,cookTimeMinutes,name,instructions,id}=receipeData
  useEffect(()=>{
    
  },[handleFavourites])

  return (
      <div className="card">
        <img src={image} width={100}/>
        
        <p>{name}</p>
        <button onClick={()=>handleFavourites(id)}> {favourite.includes(id)?"Remove From Favourites": "Move To Favourites"}</button>
        <p> Rating : {rating}</p>
        <p> Cooking Time: {cookTimeMinutes}</p>
        <h4>Instructions:</h4>
        <ol>
        {instructions.map((step:string,idx:number)=>
          
            <li className='instructionList' key={idx}>{step}</li>
        )}
        </ol>
    </div>
  )
}

export default CardDescription
