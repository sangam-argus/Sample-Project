import { useLocation } from 'react-router-dom';
import type { Receipe } from '../util/Constant';
import '../components/Button/Button.css'
import useGlobalContext from '../hooks/useGlobalContext';
function CardDescription() {
  const {favourite ,handleFavourites}=useGlobalContext()

  const location=useLocation();
  const receipeData=location.state.item
  const {image,rating,cookTimeMinutes,name,instructions}=receipeData
 

  return (
      <div className="card">
        <img src={image} width={100}/>
        
        <p>{name}</p>
        <button onClick={()=>handleFavourites(receipeData)}> <span className='buttonTop'>{favourite && favourite.length > 0 && favourite.findIndex(
              (item:Receipe) => item.id === receipeData?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}</span> </button>
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
