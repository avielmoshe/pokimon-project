import "./App.css";
import MainConteiner from "./components/mainConteiner/MainConteiner.jsx";
import DrawerAppBar from "./components/navBar/NavBar.jsx";
import { useState } from "react";

// import NavBar from "./components/mainConteiner/MainConteiner.jsx";

function App() {
  const [didUserClick, setDidUserClick] = useState(false);

  return (
    <>
      <DrawerAppBar setDidUserClick={setDidUserClick} />
      <MainConteiner
        didUserClick={didUserClick}
        setDidUserClick={setDidUserClick}
      />
    </>
  );
}

export default App;
