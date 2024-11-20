import Card from "../card/Card.jsx";
import styles from "./HomePage.module.css";

const HomePage = ({ setDidUserClick, setUserChoice }) => {
  return (
    <div className={styles.homepage}>
      <h1>Pokemons</h1>
      <Card setDidUserClick={setDidUserClick} setUserChoice={setUserChoice} />
    </div>
  );
};

export default HomePage;
