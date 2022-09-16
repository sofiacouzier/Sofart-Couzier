import React, { useEffect, useState } from 'react'
import product from './productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ cantidad }) => {
    const getProductos = (confirmacion) => new Promise((res, err) => {
        setTimeout(() => {
            if (confirmacion) {
                res(product)
            } else {
                err("Rechazado")
            }
        }, 2000)
    })

    const [productLista, setproductosLista] = useState()
    useEffect(() => {
        getProductos(true)
            .then(productLista => setproductosLista(productLista))
    }, [])

    const { id } = useParams()


    return (
        <div>
            <h2 className='info'>Hola, bienvenido! En el dia de hoy contamos con {cantidad} productos a la venta
            </h2>

            <div>
                <h5>{id} Productos</h5>
                {productLista && <ItemList productLista={productLista} />}
            </div>
        </div>
    )
}

export default ItemListContainer