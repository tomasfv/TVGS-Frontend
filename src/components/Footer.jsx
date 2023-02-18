import React from 'react';
import './Footer.css'
// import { Link } from 'react-router-dom';
// import Logo from '../Images/Logo2tvgs.png'

export default function Footer(){
    return (
        <nav className='footer-container'>
            {/* <div className='logo-footer'>
                <Link to={'/Home'}>
                    <img src={Logo} alt=''></img>
                </Link>
            </div> */}
            <hr className='barline-footer'></hr>
            <h1 className='footer-title'>THE VIDEO GAMES SHELTER</h1>
            <ul className='pages-footer'>
                <li><h3 className='page-footer'>Home</h3></li>
                <li><h3 className='page-footer'>Games</h3></li>
                <li><h3 className='page-footer'>News</h3></li>
                <li><h3 className='page-footer'>About</h3></li>
                <li><h3 className='page-footer'>Contact</h3></li>
            </ul>
        </nav>
    )
}