import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function ItemList() {
    return(
        <div>
            <Link to="/item/:1">
                <Item num="1" imagen="../public/Imagenes/bandejablancoporcelana.jpg"/>
            </Link>
            <Link to="/item/:2">
                <Item num="2" imagen="../public/Imagenes/jarroblancoporcelana.jpg"/>
            </Link>
            <Link to="/item/:3">
                <Item num="3" imagen="../public/Imagenes/platoblancoporcelana.jpg"/>
            </Link>
            <Link to="/item/:4">
                <Item num="4" imagen="../public/Imagenes/tazablancaporcelana.jpg"/>
            </Link>
        </div>
    )
}

export default ItemList;