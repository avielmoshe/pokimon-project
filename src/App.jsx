import "./App.css";
import MainConteiner from "./components/mainConteiner/MainConteiner.jsx";
import DrawerAppBar from "./components/NavBar.jsx";
// import NavBar from "./components/mainConteiner/MainConteiner.jsx";

function App() {
  return (
    <>
      <DrawerAppBar />
      <MainConteiner />
    </>
  );
}

export default App;
