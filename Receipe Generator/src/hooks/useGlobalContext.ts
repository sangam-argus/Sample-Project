import { useContext } from "react"
import { GlobalContext } from "../context/AppContext"

function useGlobalContext() {
  const ctx=useContext(GlobalContext);
  if(!ctx) throw new Error("Must be inside Global Provider")
    return ctx
}

export default useGlobalContext