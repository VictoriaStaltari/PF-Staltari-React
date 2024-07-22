import React from "react";
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from "../../asyncMocks.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    
    const [products, setProducts] = useState([])

    const objCategoryId = useParams()
    const categoryId = objCategoryId.id

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[categoryId])

// Vista
    return (
        <ItemList products={products}/>
    )
}

export default ItemListContainer;