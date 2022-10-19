import React, { useEffect, useState } from 'react'
import { getItems } from '../../app/firebase-api'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            getItems().then(res => setProductos(res.filter((res) => res.category === categoryId)))
        }
        else {
            getItems().then(res => setProductos(res))
        }
    }, [categoryId])



    return (
        <div className='fondo'>
            <div className='home'>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}

export default ItemListContainer