import React from 'react'



const Item = ({ id, nombre, precio, stock }) => {

    return (
        <div id={id}>
            <h2>
                {nombre}
            </h2>
            <p>Precio: {precio}</p >
            <p> Disponibles: {stock} unidades</p>
        </div>

    )
}
export default Item