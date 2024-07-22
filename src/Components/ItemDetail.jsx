import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function ItemDetail(props) {
    const [quantityAdd, setQuantityAdd] = useState(0)

    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity)=>{
        setQuantityAdd(quantity)
        const id = props.id
        const name = props.name
        const price = props.price
        const item = {id, name, price}

        addItem(item, quantity)
    }

    return (
        <div className="detalle_producto">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <h5>Categoría: {props.category}</h5>
            <p>{props.description}</p>
            <h4>${props.price}</h4>
            <p>{props.stock} unidades disponibles.  </p>
            <footer>
                {
                    quantityAdd > 0 ? (
                        <NavLink to={`/cart`}><button>Ir al Carrito</button></NavLink>
                    ):(
                        <ItemCount stock={props.stock} initial={1} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail;