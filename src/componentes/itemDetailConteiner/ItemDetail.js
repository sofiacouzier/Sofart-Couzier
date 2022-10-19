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
        <div className='display'>
            <div className='c'>
                <img src={products.img} className='imgd' />
            </div>


            <div>
                <div> <h3 className='n'>'{products.nombre}'</h3> <h5 className='p'>precio: ${products.precio}</h5> <h5 className='d'> {products.descripcion}</h5></div>

                <br />

                <Contador onAdd={onAdd} stock={products.stock} />
                <div>
                    <h3 ><Link className='link' to={`/Cart/`}>Ir al carrito</Link> </h3>
                </div>
            </div>



        </div>


    )



}
export default ItemDetail;