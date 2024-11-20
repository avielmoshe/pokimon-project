import "./MainConteiner.css";

import CardPage from "../cardPage/CardPage.jsx";
import HomePage from "../homePage/HomePage.jsx";
import { useState } from "react";

const MainConteiner = ({ setDidUserClick, didUserClick }) => {
  const [userChoice, setUserChoice] = useState(0);
  return (
    <div className="mainConteiner">
      {didUserClick ? (
        <CardPage userChoice={userChoice} />
      ) : (
        <HomePage
          setDidUserClick={setDidUserClick}
          setUserChoice={setUserChoice}
        />
      )}
    </div>
  );
};

export default MainConteiner;
