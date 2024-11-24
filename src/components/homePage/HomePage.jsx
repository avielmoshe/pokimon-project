import Card from "../card/Card.jsx";
import styles from "./HomePage.module.css";
import Input from "../input/Input.jsx";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.inputInHomePage}>
        <Input />
      </div>
      <Card />
    </div>
  );
};

export default HomePage;
