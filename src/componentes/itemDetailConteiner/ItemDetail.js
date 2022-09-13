import React from 'react'
const ItemDetail = ({ detalle }) => {
    return (
        <div className='detalle'>
            <h3>{detalle.nombre}, el producto mas comprado</h3>
            <img className='cuadro' src="../IMG/cuadro_Oceano_Azul.jpg" alt="" width={320} />
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.stock} unidades disponibles</h5>
            <p>{detalle.precio}</p>




        </div>
    )
}
export default ItemDetail;