import React from 'react'

const ItemListConteiner = ({ productos }) => {
    return (
        <div>
            <h2 className='info'>Hola, bienvenido! En el dia de hoy contamos con {productos} productos a la venta
            </h2>
        </div>
    )
}

export default ItemListConteiner