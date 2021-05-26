import React from "react";
import "./card.scss";

const Card = ({icon, title, color}) => {
  return (
    <div className={`card ${color}`}>
      <div className="card__icon">
        {icon}
      </div>
      <p className="fs-12 fs-sm-16 fw-400 color-white text-center">{title}</p>
    </div>
  );
};

export default Card;
