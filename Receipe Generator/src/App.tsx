import "./App.css";
import Header from "./components/Header/Header";
import GlobalProvider from "./context/AppContext";
import CardDescription from "./pages/CardDescription";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details" element={<CardDescription />} />
      </Routes>
      </GlobalProvider>
      
    </>
  );
}

export default App;
