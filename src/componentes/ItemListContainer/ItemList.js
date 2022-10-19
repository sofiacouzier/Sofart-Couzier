import React from 'react'
import Item from './Item';


const ItemList = ({ productos }) => {

    return (
        <div>
            {
                productos.map(item =>
                    <Item
                        item={item}
                        key={item.id}
                        nombre={item.nombre}
                        descripcion={item.descripcion}
                        precio={item.precio}
                        stock={item.stock}
                        img={item.img} />
                )
            }
        </div>

    )
}
export default ItemList