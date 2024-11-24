import { getOne } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import styles from "./OnePokimon.module.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OnePokimon = ({ pokemonUrl }) => {
  const { pokemonName } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const [Data, setData] = useState(null);

  const getPok = async () => {
    const data = await getOne(pokemonUrl ? pokemonUrl : url);
    setData(data);
  };

  useEffect(() => {
    getPok();
  }, []);
  if (pokemonUrl) {
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
  } else {
    return (
      Data && (
        <div className="grid-container">
          <Link to={`/pokemon/${pokemonName}/`}>
            <div
              className={styles[Data.types[0].type.name] + " " + styles.card}
            >
              <h2>{Data.forms[0].name}</h2>
              <img
                src={Data.sprites.other.showdown.front_default}
                alt={Data.forms[0].name}
              />
              <p>Ability: {Data.abilities[0].ability.name}</p>
              <p>Type: {Data.types[0].type.name}</p>
            </div>
          </Link>
        </div>
      )
    );
  }
};

export default OnePokimon;
