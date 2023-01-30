import React from 'react';
import { Link } from 'react-router-dom';
import './style/Nav.css';

function Nav() {
    return (
        <nav id='site-nav'>
            <ul>
                <li>
                    <h1>THIS IS NAV</h1>
                </li>
                <Link className='nav-link' to='/'>
                    <li>HOME</li>
                </Link>
                <Link className='nav-link' to='/Shop'>
                    <li>SHOP</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;