import React from "react";
import "../index.css";

const Card = (props) => {
  const { title, desc, photo } = props;
  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className="card-container" style={cardContainerStyle}>
      <div className="card">
        <img src={photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;




