import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function CartWidjet() {
    //Hooks
    const [cant_prod, setCant_prod] = useState(0)

    //Acciones
    const sumarCarrito = ()=>{
        setCant_prod(cant_prod + 1)
    }
    const restarCarrito = ()=>{
        if (cant_prod>0){
            setCant_prod(cant_prod - 1)
        }
    }
    //Vista
    return (
        <div className="carrito">
            <button onClick={restarCarrito}>-</button>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{cant_prod}</p>
            <button onClick={sumarCarrito}>+</button>
        </div>
    )
}

export default CartWidjet;