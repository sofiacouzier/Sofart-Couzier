import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../ItemListContainer/Contador'



const ItemDetail = ({ detalle }) => {
    const [count, setCount] = useState(0);

    return (
        <div className='detalle'>
            <h3>{detalle.nombre}</h3>
            <img className='cuadro' src="../IMG/cuadro_Oceano_Azul.jpg" alt="" width={320} />
            <h5>{detalle.descripcion}</h5>
            <h5>{detalle.stock} unidades disponibles</h5>
            <p>{detalle.precio}</p>
            {
                count == 0 ?
                    <Contador Productos={detalle.stock} onAdd={(c) => { setCount(c) }} />
                    : <Link to={`/Cart/`}>Comprar</Link>
            }



        </div>
    )

}
export default ItemDetail;