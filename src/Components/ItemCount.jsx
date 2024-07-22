import { useState } from "react";

function ItemCount(props) {
    //Hooks
    const [quantity, setquantity] = useState(props.initial)

    //Acciones
    const increase = ()=>{
        if (quantity < props.stock){
            setquantity(quantity + 1)
        }
    }
    const decrease = ()=>{
        if (quantity > props.initial){
            setquantity(quantity - 1)
        }
    }
    //Vista
    return (
        <div className="agregar">
            <div className="contador">
                <button onClick={decrease}>-</button>
                <p>{quantity}</p>
                <button onClick={increase}>+</button>
            </div>
            <button onClick={()=>props.onAdd(quantity)} disabled={!props.stock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;