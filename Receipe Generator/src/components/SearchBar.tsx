import React, { useContext, useState } from 'react'
import "./Header.css"
import { GlobalContext } from '../context/AppContext'
function SearchBar() {
    const {searchString,setSearchString,handleSubmit}=useContext(GlobalContext)

  return (
    <>
    <form onSubmit={()=>handleSubmit(event)}>
    <input
    type='text'
    name='Search'
    placeholder='Enter items..'
    className='searchBar'
    value={searchString}
    onChange={(e)=>setSearchString(e.target.value)}
    
    />
    </form>
    </>
  )
}

export default SearchBar