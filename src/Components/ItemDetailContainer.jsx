import React from 'react';
import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMocks';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [prod, setProd] = useState(null)

    const objItemId = useParams()
    const itemId = parseInt(objItemId.id)

    useEffect(()=>{
        getProductById(itemId)
            .then(response=>{
                setProd(response)
            })
            .catch(error=>{
                console.error(error)
            })

    },[itemId])

    return (
        <ItemDetail {...prod}/>
    )
}

export default ItemDetailContainer;