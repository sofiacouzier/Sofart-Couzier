import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
import Contador from '../ItemListContainer/Contador';


const ItemDetail = ({ products, }) => {

    const { agregarAlCarrito } = useContext(AppContext)


    return (
        <>


            <div>
                <div> <h3>{products.nombre}</h3> <h5>precio: ${products.precio}</h5></div>
                {/* <Contador stock={products.stock} valor={valor} /> */}
                <button onClick={() => { agregarAlCarrito(products) }}>agregar</button>

            </div>

            <div>
                <Link to={`/Cart/`}>Comprar</Link>
            </div>

        </>


    )



}
export default ItemDetail;