import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import CartWidjet from './CartWidjet';

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Isa Deco</NavLink>
            <NavLink to="/category/category1">Categoria1</NavLink>
            <NavLink to="/category/category2">Categoria2</NavLink>
            <NavLink to="/category/category3">Categoria3</NavLink>
            <CartWidjet/>
        </nav>
    )
}

export default NavBar;