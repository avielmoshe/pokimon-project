import { getOne } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import styles from "./OnePokimon.module.css";

const OnePokimon = ({ pokimonUrl }) => {
  const [Data, setData] = useState(null);

  const getPok = async () => {
    const data = await getOne(pokimonUrl);
    setData(data);
  };

  useEffect(() => {
    getPok();
  }, []);

  return (
    Data && (
      <div className={styles[Data.types[0].type.name] + " " + styles.card}>
        <h2>{Data.forms[0].name}</h2>
        <img
          src={Data.sprites.other.showdown.front_default}
          alt={Data.forms[0].name}
        />
        <p>Ability: {Data.abilities[0].ability.name}</p>
        <p>Type: {Data.types[0].type.name}</p>
      </div>
    )
  );
};

export default OnePokimon;
