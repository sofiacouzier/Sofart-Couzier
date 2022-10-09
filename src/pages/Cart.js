import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/Provider'

const Cart = () => {
    const { carrito } = useContext(AppContext)
    const { total } = useContext(AppContext)
    const { removeCarrito } = useContext(AppContext)
    const { menos } = useContext(AppContext)


    return (
        <div>
            <h1>Cart</h1>
            <div>
                Aqui apareceran los productos elegidos
            </div>
            {carrito.length > 0 ? carrito.map(item => <div key={item.id}>
                <br /><h2 >{item.nombre}</h2> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id) && menos(item.precio)}>eliminar producto</button>
                <br></br>
                <br />

            </div>)

                : <Link to={'/product/'}>Comenza a comprar!</Link>
            }
            <br />
            <br />
            <br />

            <div>precio total= {total}
                <Link to={'/Comprar/'}>finalizar compra</Link></div>
        </div>
    )
}

export default Cart