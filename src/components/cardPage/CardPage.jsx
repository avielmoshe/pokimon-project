import { getOne } from "../../utils/getApi.js";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";

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
      <div>
        <img src={Data.sprites.other.dream_world.front_default} alt="" /> ;
      </div>
    )
  );
};

export default CardPage;
