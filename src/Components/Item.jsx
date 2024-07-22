import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { NavLink } from 'react-router-dom';

function Item(props) {  
    return (
        <article className='producto_en_lista'>
            <h2>{props.name}</h2>
            <img src={props.img} alt="foto producto" />
            <h4>${props.price}</h4>
            <NavLink to={`/item/${props.id}`}>
                <button>Ver Detalles</button>
            </NavLink>
        </article>
    )
}

export default Item;