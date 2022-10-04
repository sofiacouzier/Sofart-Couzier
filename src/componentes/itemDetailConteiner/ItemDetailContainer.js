import React from 'react'
import { useEffect, useState } from 'react';
import { getItemById } from '../../app/firebase-api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detalles, setDetalle] = useState({});
    let { id } = useParams()
    useEffect(() => {
        getItemById(id).then(detalles => setDetalle(detalles))
    }, [id])
    console.log(detalles)
    return (
        <ItemDetail detalle={detalles} />
    )
}
export default ItemDetailContainer;