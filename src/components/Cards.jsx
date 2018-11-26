import React, { Component } from "react";
import Card from "./Card";

function Cards(props) {
  return (
    <div className='container'>
      <div className='row' style={{paddingLeft: '8%'}}>
        {props.instaData.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            photo={data.photo}
            location={data.location}
            likes={data.likes}
            comment={data.comment}
            onLikeButton={props.onLikeButton}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
