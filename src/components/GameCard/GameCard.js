import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card mx-auto" value={props.id} onClick={() => props.clickMe(props.id)}>
    <div>
      <img className="imgCard" alt={props.image} src={props.image} />
    </div>
  </div>
);

export default GameCard;
