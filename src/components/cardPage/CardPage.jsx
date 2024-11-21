import { getOne } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CardPage.css";

const CardPage = () => {
  const { pokemonName } = useParams();

  const [Data, setData] = useState(null);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const getPok = async () => {
    const data = await getOne(url);
    setData(data);
  };

  useEffect(() => {
    getPok();
  }, []);

  return (
    Data && (
      <div className="pokemonCard">
        <h1>{Data.forms[0].name}</h1>
        <img
          src={Data.sprites.other.dream_world.front_default}
          alt={Data.forms[0].name}
        />
        <p>Type: {Data.types[0].type.name}</p>
        <p>Ability: {Data.abilities[0].ability.name}</p>
        <h2>Pokemon Voice</h2>
        <audio controls>
          <source src={Data.cries.latest} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <p className="base_experience">Experience: {Data.base_experience}</p>
        <p>Favorite Move: {Data.moves[0].move.name}</p>
        <h2>In Action!</h2>
        <img
          className="gif"
          src={Data.sprites.other.showdown.front_default}
          alt={Data.forms[0].name}
        />
      </div>
    )
  );
};

export default CardPage;
