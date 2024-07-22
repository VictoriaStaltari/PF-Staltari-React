import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartItem(props) {
    const {removeItem} = useContext(CartContext)
    const subtotal = (props.quantity)*(props.item.price)

    return (
        <div className="item_carrito">
            <p><strong>{props.item.name}</strong></p>
            <p>Cantidad: {props.quantity}</p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={()=> removeItem(props.item.id)} ><strong>X</strong></button>
        </div>
    )
}
export default CartItem;