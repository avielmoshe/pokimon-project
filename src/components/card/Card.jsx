import { getAll } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import OnePokimon from "../OnePokimon/OnePokimon.jsx";
import "./Card.css";

const Card = ({ setDidUserClick, setUserChoice }) => {
  const [pokeballData, setPokeballData] = useState(null);

  const getAllPokes = async () => {
    const data = await getAll();
    setPokeballData(data);
  };

  useEffect(() => {
    getAllPokes();
  }, []);

  const userChoiceAndClick = () => {
    setDidUserClick(true);
  };

  return (
    pokeballData && (
      <div className="grid-container">
        {pokeballData.map((pokimon) => (
          <div
            onClick={() => {
              userChoiceAndClick();
              setUserChoice(pokimon.url);
            }}
            className="card"
            key={`idIs${pokimon.name}`}
          >
            <OnePokimon pokimonUrl={pokimon.url} />
          </div>
        ))}
      </div>
    )
  );
};

export default Card;
