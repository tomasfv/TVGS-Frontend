import React from 'react';
import "./LandingPage.css";
import { Link } from 'react-router-dom';

export default function LandingPage(){

    return (
        <div>
            <h1>Landing Page</h1>
            <Link to='/Home'>
                <button>HOME</button>
            </Link>
        </div>
    )
}
