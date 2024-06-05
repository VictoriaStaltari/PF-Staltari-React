import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidjet() {
    const num = 5
    return (
        <div className="carrito">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{num}</p>
        </div>
    )
}

export default CartWidjet;