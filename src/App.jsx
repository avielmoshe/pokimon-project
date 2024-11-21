import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainConteiner from "./components/mainConteiner/MainConteiner.jsx";
import DrawerAppBar from "./components/navBar/NavBar.jsx";
import CardPage from "./components/cardPage/CardPage.jsx";
import Favorites from "./components/favorite/Favorite.jsx";
import About from "./components/abuot/About.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <DrawerAppBar />
        <Routes>
          <Route path="/pokemon/:id" element={<CardPage />} />
          <Route path="/" element={<MainConteiner />} />
          <Route path="/about" element={<About />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
