import React from 'react'
import Item from './Item';


const ItemList = ({ productLista }) => {

    return (
        <div>
            {productLista.map((item) => <Item key={item.id} {...item}></Item>)}
        </div>

    )
}
export default ItemList