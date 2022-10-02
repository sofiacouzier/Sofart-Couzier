import React, { useEffect, useState } from 'react'
import Product from './Productos'
import ItemList from './ItemList'

const ItemListContainer = ({ cantidad }) => {
    const getProductos = (confirmacion) => new Promise((res, err) => {
        setTimeout(() => {
            if (confirmacion) {
                res(Product)
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



    return (
        <div>
            <h2 className='info'>Hola, bienvenido! En el dia de hoy contamos con {cantidad} productos a la venta
            </h2>

            <div>
                {productLista && <ItemList productLista={productLista} />}
            </div>
        </div>
    )
}

export default ItemListContainer