
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import CardDescription from './pages/CardDescription'
import { useState } from 'react'
import type { Receipe } from './util/Constant'

function App() {
  const [searchString,setSearchString]=useState("")
  const [recipe,setRecipe]=useState<Receipe[]|[]>([])
  const [loading,setLoading]=useState<Boolean>(false)
  const [error,setError]=useState<string>('')
  const [favourite,setFavourite]=useState<Receipe[]|[]>([])

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    console.log("Hello")
    setSearchString("")
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchString}`
      );
      const data = await response.json();
      // setReciepe(data)
      if (data) {
        setRecipe(data.recipes);
        setLoading(false);
      }
    } catch (e: any) {
      setError(e);
      setLoading(false);
    }
  };
const handleFavourites = (recipeItem: Receipe) => {
    const temp = [...favourite];
    const index = temp.findIndex(item=> item.id === recipeItem.id)

    if(index === -1) {
      temp.push(recipeItem)
    } else {
      temp.splice(index)
    }

    setFavourite(temp)
  
  };
  return (
    <>
      <Header search={searchString} setSearch={setSearchString} handleSubmit={handleSubmit}/>
      <Routes>
        <Route path="/" element={<Home loading={loading} recipe={recipe}/>} />
        <Route path="/favourites" element={<Favourites favourite={favourite} recipe={recipe} />} />
        <Route path="/details" element={<CardDescription handleFavourites={handleFavourites} favourite={favourite}/>} />
      </Routes>
    </>
  )
}

export default App
