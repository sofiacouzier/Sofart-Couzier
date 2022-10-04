import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
// import Contador from '../ItemListContainer/Contador'


const ItemDetail = ({ detalle }) => {
    // const [det, setDet] = useState({})
    let { id } = useParams()
    // useEffect(() => {
    //     fetch(detalles)
    //         .then((res) => res.json)
    //         .then(setDet(detalles.filter((item) => item.id == id)))
    // }, [id]);

    const { agregarAlCarrito } = useContext(AppContext)



    return (
        <>
            <Link to={`/Cart/`}>Comprar</Link>

            <div>
                <div> <h3>{detalle.nombre}</h3> <h5>precio: ${detalle.precio}</h5></div>
                <button onClick={() => { agregarAlCarrito(detalle) }}>agregar</button>

            </div>

            <div>

            </div>

        </> // <div className='detalle'>
        //     { <h3>{detalle.nombre}</h3>
        //     <img className='cuadro' src="../IMG/cuadro_Oceano_Azul.jpg" alt="" width={320} />
        //     <h5>{detalle.descripcion}</h5>
        //     <h5>{detalle.stock} unidades disponibles</h5>
        //     <p>{detalle.precio}</p>
        //     { {
        //         count == 0 ?
        //             <Contador Productos={detalle.stock} onAdd={(c) => { setCount(c) }} />
        //             : <Link to={`/Cart/`}>Comprar</Link>
        //     } }


    )
    // </div>



}
export default ItemDetail;