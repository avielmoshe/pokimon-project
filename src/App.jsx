import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainConteiner from "./components/mainConteiner/MainConteiner.jsx";
import DrawerAppBar from "./components/navBar/NavBar.jsx";
import CardPage from "./components/cardPage/CardPage.jsx";
import Favorites from "./components/favorite/Favorite.jsx";
import About from "./components/abuot/About.jsx";
import OnePokimon from "./components/OnePokimon/OnePokimon.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/pokemon/:pokemonName" element={<CardPage />} />
          <Route path="/" element={<MainConteiner />} />
          <Route path="/about" element={<About />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route
            path="/pokemonByName"
            element={<OnePokimon pokemonUrl={pokemonUrl} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
