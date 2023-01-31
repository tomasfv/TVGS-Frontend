import React from 'react';

import './Home.css'

import NavBar from './NavBar';
import Gallery from './Gallery';


export default function Home(){

       
    return (
        <div className='home-container'>
            <NavBar/>
            <Gallery/>
    
            
        </div>
    )
}