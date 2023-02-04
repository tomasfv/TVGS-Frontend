import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function NavBar(){
    return (
        <div className='navbar-container'>
            <div className='logo-navbar'>
                <Link to={'/Home'}>
                    <h1>TVGS</h1>
                </Link>
            </div>
            <div className='pages-navbar'>
                <h3 className='page-navbar'>Home</h3>
                <h3 className='page-navbar'>Games</h3>
                <h3 className='page-navbar'>News</h3>
                <h3 className='page-navbar'>About</h3>
                <h3 className='page-navbar'>Contact</h3>
            </div>
        </div>
    )
}