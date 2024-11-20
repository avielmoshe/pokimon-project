import { getOne } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import styles from "./CardPage.module.css";

const CardPage = ({ userChoice }) => {
  const [Data, setData] = useState(null);

  const getPok = async () => {
    const data = await getOne(userChoice);
    setData(data);
  };

  useEffect(() => {
    getPok();
  }, []);
  console.log(Data);

  return (
    Data && (
      <div className={styles.pokemonCard}>
        <h1>{Data.forms[0].name}</h1>
        <img src={Data.sprites.other.dream_world.front_default} alt="" />
        <p>Ability: {Data.abilities[0].ability.name}</p>
        <audio controls>
          <source src={Data.cries.latest} type="audio/mp3" />
          <source src={Data.cries.latest} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  );
};

export default CardPage;
