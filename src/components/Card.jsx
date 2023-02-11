import React from "react";
import './Card.css'
import Logo from '../Images/Logo2tvgs.png'

export default function Card({name, image, genres}){

    return(
        <div className="card-container">
            <img src={image ? image : Logo} alt='img not found'  className="card-img"/>
            <h3>{name}</h3>
            <h5>{genres}</h5>
        </div>
    )
}