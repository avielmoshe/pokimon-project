import "./MainConteiner.css"

import CardPage from "../cardPage/CardPage.jsx";
import HomePage from "../homePage/HomePage.jsx";
import { useState } from "react";

const MainConteiner =()=>{
    const [userChoice, setUserChoice] = useState(0);
    const [didUserClick, setDidUserClick] = useState(false)
    return(
    <div>
        {didUserClick?(<CardPage userChoice={userChoice} />):(
        <HomePage setDidUserClick={setDidUserClick} setUserChoice={setUserChoice}/>)}
    </div>
    )
}

export default MainConteiner