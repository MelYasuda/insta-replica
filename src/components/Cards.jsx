import React, { Component } from 'react';
import Card from './Card';

function Cards(props){
    return(
        <div>
        {props.instaData.map((data, index) => 
            <Card key={index} name={data.name}
            photo={data.photo}
            location={data.location}
            likes={data.likes}
            comment={data.comment}/>
            )}
        </div>
    );
}

export default Cards;