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
        {pokeballData.map((pokimon, i) => (
          <Link to={`/pokemon/${i + 1}/`} key={`idIs${pokimon.name}`}>
            <div className="card">
              <OnePokimon pokimonUrl={pokimon.url} />
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default Card;
