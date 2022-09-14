import React from 'react'
import Contador from './Contador'

const Item = ({ id, nombre, precio, stock }) => {

    return (
        < div className='prod' id={id}>
            <h2>
                {nombre}
            </h2>
            <p>Precio: ${precio}</p >
            <p> Disponibles: {stock} unidades</p>
            <Contador Productos={stock} />

        </div>

    )
}
export default Item