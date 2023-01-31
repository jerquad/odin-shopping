import { Link } from 'react-router-dom';
import './style/Nav.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

function Nav({ cartSize, handleCartClick }) {
    function displayCartSize() {
        if (cartSize > 0) return (
            <div className='cart-size'>{cartSize}</div>
        )
    }

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
                <div className='cart-box' onClick={() => handleCartClick()}>
                    <Icon path={mdiCartOutline} size={1.5} />
                    {displayCartSize()}
                </div>
            </ul>
        </nav>
    )
}

export default Nav;