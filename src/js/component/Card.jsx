import propTypes from "prop-types";
import React from "react";
const Card = (props) => {
  return (
    <>
      <div class="card text-center m-2 ">
        <img src={props.scr} class="card-img-top" alt="Card image cap" />
        <div class="card-body border 1">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
        </div>
        <div class="card-footer border 1">
          <a className="btn btn-dark ">Ver Más</a>
        </div>
      </div>
    </>
  );
};

export default Card;
