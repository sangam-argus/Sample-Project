import React from 'react'
import Cards from "../components/Cards";
import type { Receipe } from "../util/Constant";
import { useContext } from 'react';
import { GlobalContext } from '../context/AppContext';
import './Home.css'

function Favourites() {
  const {favourite,receipe}=useContext(GlobalContext)

  if(favourite.length===0 || receipe.length===0){
    return(
      <p>
        No Favourites
      </p>
    )
  }
  return (
   <div className='cardContainer'>
    {receipe.filter((item:Receipe)=>
      favourite.includes(item.id))
      .map((item:Receipe)=>
          <Cards item={item} key={item.id}/>
       
      )
    }
   </div>
  )
}

export default Favourites

