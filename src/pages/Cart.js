import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/Provider'

const Cart = () => {
    const { carrito } = useContext(AppContext)
    const { total } = useContext(AppContext)

    //const { totalPrice } = useContext(AppContext)
    const { removeCarrito } = useContext(AppContext)
    const { menos } = useContext(AppContext)


    return (
        <div>
            <h1>Cart</h1>
            <div>
                Aqui apareceran los productos elegidos
            </div>
            {carrito.length > 0 ? carrito.map(item => <div key={item.id}> <h1></h1>
                <br /><h2 >{item.nombre}</h2><h5>cant: {item.valor}</h5> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id, item.valor, item.precio) && menos(item.precio, item.valor)}>eliminar producto</button>
                <br></br>
                <br />

            </div>)

                : <Link to={'/product/'}>Comenza a comprar!</Link>
            }
            <br />
            <br />
            <br />
            <h1>{total}</h1>
            <Link to={'/Comprar/'}>finalizar compra</Link></div>





    )
}

export default Cart