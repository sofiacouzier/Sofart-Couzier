import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
import Contador from './Contador';


const ItemDetail = ({ products, }) => {

    const { agregarAlCarrito } = useContext(AppContext)
    let valor

    const onAdd = (valor) => {
        if (valor < 1) {
            alert('Debes agregar al menos 1 producto')
        } else {
            agregarAlCarrito(products, valor)

        }
    }

    return (
        <>


            <div>
                <div> <h3>{products.nombre}</h3> <h5>precio: ${products.precio}</h5></div>

                {/* <button onClick={() => { agregarAlCarrito(products) }}>agregar</button> */}

                <Contador onAdd={onAdd} stock={products.stock} />

            </div>

            <div>
                <Link to={`/Cart/`}>Comprar</Link>
            </div>

        </>


    )



}
export default ItemDetail;