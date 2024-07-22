import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity == 0){
        return (
            <div>
                <h1>El carrito esta vacío</h1>
                <NavLink to={"/"}><button className={"ver_productos"}>Ver productos</button></NavLink>
            </div>
        )
    }
    return (
        <div className="lista_carrito">
            {cart.map(prod=> <CartItem key={prod.item.id} {...prod}/>)}
            <h3>Total: ${total}</h3>
            <div className="botones_carrito">
                <button onClick={()=> clearCart()} className="vaciar_carrito" >Vaciar carrito</button>
                <NavLink to={"checkout"}><button className="checkout">Checkout</button></NavLink>
            </div>
        </div>
    )
}
export default Cart;