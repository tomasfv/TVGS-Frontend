import React from 'react';
import "./LandingPage.css";
import { Link } from 'react-router-dom';

export default function LandingPage(){

    return (
        <div>
            <h1>Welcome to</h1>
            <h1>THE VIDEO GAMES SHELTER</h1>
            <Link to='/Home'>
                <button className='start-landing'>START</button>
            </Link>
        </div>
    )
}
