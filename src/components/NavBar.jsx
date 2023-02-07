import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return (
        <nav className='navbar-container'>
            <div className='logo-navbar'>
                <Link to={'/Home'}>
                    <h1>TVGS</h1>
                    {/* <img src='/Images/Destiny-1.jpg' alt=''></img> */}
                </Link>
            </div>
            <ul className='pages-navbar'>
                <li><h3 className='page-navbar'>Home</h3></li>
                <li><h3 className='page-navbar'>Games</h3></li>
                <li><h3 className='page-navbar'>News</h3></li>
                <li><h3 className='page-navbar'>About</h3></li>
                <li><h3 className='page-navbar'>Contact</h3></li>
            </ul>
        </nav>
    )
}