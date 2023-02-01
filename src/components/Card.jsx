import React from "react";
import './Card.css'

export default function Card({name, image, genres}){

    return(
        <div className="card-container">
            <img src={image} alt='img not found' className="card-img"/>
            <h3>{name}</h3>
            <h5>{genres}</h5>
        </div>
    )
}