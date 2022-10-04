import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    // const [count, setCount] = useState(0);


    return (


        < div className='prod' id={item.id}>
            <h2>
                {item.nombre}
            </h2>
            <p>Precio: ${item.precio}</p >
            <p> Disponibles: {item.stock} unidades</p>
            {/* {
                count == 0 ?
                    <Contador Productos={stock} onAdd={(c) => { setCount(c) }} />
                    : <Link to={`/Cart/`}>Comprar</Link>
            } */}
            <Link to={`/Item/${item.id}`}>Ver detalle</Link>
        </div>



    )
}
export default Item