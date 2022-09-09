import React from 'react'
import Item from './Item';


const ItemList = ({ productLista }) => {
    return (
        <div>
            {productLista.map((product) => <Item key={product.id} {...product}></Item>)}
        </div>

    )
}
export default ItemList