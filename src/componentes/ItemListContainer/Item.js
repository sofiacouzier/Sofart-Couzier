import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {


    return (


        < div className='prod' id={item.id}>
            <h2 className='nombre'>
                {item.nombre}
            </h2>
            <img src={item.img} className='img' />
            <h5 className='desc'> {item.descripcion}</h5>
            <p> ${item.precio}</p >
            <h5 className='st'> Disponibles: {item.stock} unidades</h5>


            <Link className='links' to={`/Item/${item.id}`}>Ver detalle</Link>
        </div>



    )
}
export default Item