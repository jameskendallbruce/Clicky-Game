import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card mx-auto">
    <div>
      <img className="mx-auto align-middle" alt={props.image} src={props.image} />
    </div>
  </div>
);

export default GameCard;
