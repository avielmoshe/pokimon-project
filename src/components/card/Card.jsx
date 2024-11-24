import { getAll } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import OnePokimon from "../OnePokimon/OnePokimon.jsx";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = () => {
  const [pokeballData, setPokeballData] = useState(null);

  const getAllPokes = async () => {
    const data = await getAll();
    setPokeballData(data);
  };

  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    pokeballData && (
      <div className="grid-container">
        {pokeballData.map((pokemon, i) => (
          <Link
            to={`/pokemon/${pokemon.name}/`}
            key={`idIs${pokemon.name}`}
            style={{ textDecoration: "none" }}
          >
            <div className="card">
              <OnePokimon pokemonUrl={pokemon.url} />
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default Card;
