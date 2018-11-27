import React, { Component } from "react";

function Card(props) {

  function handleLikeButton(id){
    props.onLikeButton(id);
  }

  return (
    <div className='card-deck' style={{ marginTop: 15 }}>
      <div className="card" style={{ width: 18 + "em", marginRight: 40 }}>
        <img className="card-img-top" src={props.photo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={ () => handleLikeButton(props.index)} className="btn btn-primary">
            Like
          </button>
          <p>{props.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
