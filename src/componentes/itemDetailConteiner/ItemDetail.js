import React from 'react'

const ItemDetail = ({ detalle }) => {
    return (
        <div className='detalle'>
            <h3>{detalle.nombre}, el producto mas comprado</h3>
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.stock} unidades disponibles</h5>




        </div>
    )
}
export default ItemDetail;