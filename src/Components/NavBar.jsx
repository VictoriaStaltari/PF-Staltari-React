import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import CartWidjet from './CartWidjet';

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Isa Deco</NavLink>
            <NavLink to='/productos'>Productos</NavLink>
            <NavLink to="/category/:categoryId">Categoria1</NavLink>
            <CartWidjet/>
        </nav>
    )
}

export default NavBar;