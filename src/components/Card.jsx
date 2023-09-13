import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.img} />
      <h2>{props.event}</h2>
      <h3>{props.location}</h3>
    </div>
  )
}

export default Card;