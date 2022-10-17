import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {


    return (


        < div className='prod' id={item.id}>
            <h2>
                {item.nombre}
            </h2>
            <h5>{item.descripcion}</h5>
            <p>Precio: ${item.precio}</p >
            <p> Disponibles: {item.stock} unidades</p>

            <Link to={`/Item/${item.id}`}>Ver detalle</Link>
        </div>



    )
}
export default Item