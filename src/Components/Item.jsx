import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

function Item(props) {
    return (
        <article>
            <h2>Producto {props.num}</h2>
            <img src={props.imagen} alt="" />
            <button>Agregar al Carrito</button>
        </article>
    )
}

export default Item;