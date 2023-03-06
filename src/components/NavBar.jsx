import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Logo from '../Images/Logo2tvgs.png'

export default function NavBar(){
    return (
        <nav className='navbar-container'>
            <div className='logo-navbar'>
                <Link to={'/Home'}>
                    <img src={Logo} alt=''></img>
                </Link>
            </div>
            <ul className='pages-navbar'>
                <li><h3 className='page-navbar'>Home</h3></li>
                <li><h3 className='page-navbar'>Games</h3></li>
                <li><h3 className='page-navbar'>News</h3></li>
                <li><h3 className='page-navbar'>About</h3></li>
                <li><h3 className='page-navbar'>Contact</h3></li>
                <li>
                    <Link to={'/usercreate'}>
                        <button className='login-navbar'>Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}