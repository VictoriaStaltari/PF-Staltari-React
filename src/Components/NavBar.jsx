import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import CartWidjet from './CartWidjet';

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/productos'>Productos</NavLink>
            <NavLink to="/info">Quienes Somos</NavLink>
            <NavLink to='/contacto'>contacto</NavLink>
            <CartWidjet/>
        </nav>
    )
}

export default NavBar;