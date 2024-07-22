import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

function CartWidjet() {
    const {totalQuantity} = useContext(CartContext)

    //Vista
    return (
        <NavLink to={"/cart"}>
            <div className="carrito">
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{totalQuantity}</p>
            </div>
        </NavLink>
    )
}

export default CartWidjet;