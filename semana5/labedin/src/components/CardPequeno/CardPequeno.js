import React from 'react';
import './CardPequeno.css';

function CardPequeno(props) {
  return (
    <div className="bigcard-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.email}</h4>
        <p>{props.endereco}</p>
      </div>
    </div>
  );
}

export default CardPequeno;
