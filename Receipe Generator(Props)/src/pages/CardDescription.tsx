import { useLocation } from 'react-router-dom';
import type { Receipe } from '../util/Constant';
import '../components/Button/Button.css'
import BackButton from '../components/BackButton/BackButton';
import './CardDescription.css'
import { useState } from 'react';
function CardDescription({handleFavourites,favourite}:{handleFavourites:(receipe:Receipe)=>void,favourite:Receipe[]}) {
  const location=useLocation();
  const recipe=location.state.item
  const [loading,setLoading]=useState(true)

  return (
    <>
      <BackButton/>
     <div className="recipe-container">
      <h1 className="recipe-title">{recipe.name}</h1>
      <div className="recipe-header">
        <div className="recipe-image-wrapper">
          {loading && <div className="loading">Loading...</div>}
          <img
            src={recipe.image}
            alt={recipe.name}
            className={`recipe-image ${loading ? "hidden" : ""}`}
            onLoad={() => setLoading(false)}
          />
          
        </div>
         
        <div className="recipe-meta">
            
          <p><span className="primary">Prep Time:</span> {recipe.prepTimeMinutes} mins</p>
          <p><span className="primary">Cook Time:</span> {recipe.cookTimeMinutes} mins</p>
          <p><span className="primary">Servings:</span> {recipe.servings}</p>
          <p><span className="primary">Difficulty:</span> {recipe.difficulty}</p>
          <p><span className="primary">Cuisine:</span> {recipe.cuisine}</p>
          <p><span className="primary">Calories/Serving:</span> {recipe.caloriesPerServing}</p>
          <p><span className="primary">Rating:</span> :star: {recipe.rating} ({recipe.reviewCount} reviews)</p>
          <p><span className="primary">Meal Type:</span> {recipe.mealType.join(", ")}</p>
          <p><span className="primary">Tags:</span> {recipe.tags.join(", ")}</p>
        </div>
      </div>
      {/* <div className='favouriteButton'> */}
        <button onClick={()=>handleFavourites(recipe)} style={{marginLeft:'100px'}}> <span className='buttonTop'>{favourite && favourite.length > 0 && favourite.findIndex(
              (item:Receipe) => item.id === recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}</span> </button>
      {/* </div> */}
      <div className="recipe-section">
         
        <h2 className="secondary">Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item:string, idx:number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-section">
        <h2 className="secondary">Instructions</h2>
        <ol>
          {recipe.instructions.map((step:string, idx:number) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>

    </>
  )
}

export default CardDescription


 