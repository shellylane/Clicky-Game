import React from "react";
import './index.css'
function GameCard(props) {
    return (
    <div  onClick={() => props.handleImageClick(props.id)}>
        <img className="charachter-image"  src={props.image} />
    </div>
    );  
}

export default GameCard;