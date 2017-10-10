import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <ul className='menu'>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/products'}>Products</Link>
        </li>
    </ul>
);

export default Menu;
