import React from "react";
import Item from "./Item";

function ItemList(props) {
    const products = props.products

    // Vista
    return(
        <div className="lista_productos">
            {products.map(prod=> <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList;