import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Item = ({ id, nombre, precio, stock }) => {
    // const [count, setCount] = useState(0);


    return (


        < div className='prod' id={id}>
            <h2>
                {nombre}
            </h2>
            <p>Precio: ${precio}</p >
            <p> Disponibles: {stock} unidades</p>
            {/* {
                count == 0 ?
                    <Contador Productos={stock} onAdd={(c) => { setCount(c) }} />
                    : <Link to={`/Cart/`}>Comprar</Link>
            } */}
            <Link to={`/Item/${id}`}>Ver detalle</Link>
        </div>



    )
}
export default Item