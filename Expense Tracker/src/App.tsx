
import './App.css'
import Body from './component/Body'
import GlobalProvider from './context/GlobalContext'

function App() {
  

  return (
    <>
    <GlobalProvider>

      <Body/>
    </GlobalProvider>
    </>
  )
}

export default App
