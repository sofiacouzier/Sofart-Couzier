import React, { useEffect, useState } from 'react'
import { getItems } from '../../app/firebase-api'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState()


    useEffect(() => {
        getItems().then(res => setProductos(res))

    }, [])



    return (
        <div>
            <h2 className='info'>Hola, bienvenido! En el dia de hoy contamos con estos productos a la venta
            </h2>

            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer