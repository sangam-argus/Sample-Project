import "./SearchBar.css"
import useGlobalContext from '../../hooks/useGlobalContext'
function SearchBar() {
    const {searchString,setSearchString,handleSubmit}=useGlobalContext()

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