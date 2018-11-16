import React, { Component } from "react";

function Card(props) {
  return (
    <div className="card" style={{width: 18+'em'}}>
      <img className="card-img-top" src={props.photo} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
