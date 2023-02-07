import React from 'react';
import "./LandingPage.css";
import { Link } from 'react-router-dom';

export default function LandingPage(){

    return (
        <div className='landing-container'>
            
            <h1 className='landing-title'>THE VIDEO GAMES SHELTER</h1>
            <h2 className='landing-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque accusamus nam officiis animi fugit, officia sed aut architecto nemo delectus ullam provident</h2>
            <Link to='/Home'>
                <button className='start-landing'>START</button>
            </Link>
        </div>
    )
}
