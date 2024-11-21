import Card from "../card/Card.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1>Pokemons</h1>
      <Card />
    </div>
  );
};

export default HomePage;
