import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../app/Provider';
import Contador from '../ItemListContainer/Contador'
import productos from '../ItemListContainer/ItemListContainer'


const ItemDetail = ({ nombre }) => {
    const [det, setDet] = useState({})
    let { id } = useParams()
    useEffect(() => {
        fetch(productos)
            .then((res) => res.json)
            .then(setDet(productos.filter((item) => item.id == id)))
    }, [id]);

    const { agregarAlCarrito } = useContext(AppContext)



    return (
        <>
            <Link to={`/Cart/`}>Comprar</Link>

            <div>
                {det.length > -1 ? <div> <h3>{det[0].nombre}</h3> <h5>precio: ${det[0].precio}</h5></div> : 'cargando'}
                <button onClick={() => { agregarAlCarrito(det[0]) }}>agregar</button>

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