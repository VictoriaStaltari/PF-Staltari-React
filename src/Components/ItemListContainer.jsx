import React from "react";
import ItemList from './ItemList'
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer(props) {
    return (
        <div className="contenedor-lista">
        <ItemList />
        </div>
    )
}

export default ItemListContainer;