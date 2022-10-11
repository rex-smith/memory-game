import React from "react";

function Card(props) {
  return (
    <div className="card-container" onClick={(e) => props.onClick(e, props.id)}>
      <div className="image-container">
        <img src={props.image} alt="" />
      </div>
      <div className="image-label">{props.label}</div>
    </div>
  );
}

export default Card;
