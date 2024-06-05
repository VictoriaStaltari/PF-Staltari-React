import CartWidjet from './CartWidjet'

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Isa Deco</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Quienes Somos</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#"></a></li>
            </ul>
            <CartWidjet/>
        </nav>
    )
}

export default NavBar;