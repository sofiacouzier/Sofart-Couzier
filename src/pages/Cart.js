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
        <div className='ca'>

            {carrito.length > 0 ? carrito.map(item => <div className='carrit' key={item.id}> <img className='im' src={item.img} /><div className='data'>
                <br /><h2 >{item.nombre}</h2><h5>cant: {item.valor}</h5> <h5>precio: ${item.precio}</h5></div><button className='btn' onClick={() => removeCarrito(item.id, item.valor, item.precio)} onSubmit={() => menos(item.valor)} >eliminar producto</button>
                <br></br>
                <br />

            </div>)

                : <div className='vacio'> <h4>Tu carrito esta vacio,</h4><Link className='li' to={'/product/'}>Comenza a comprar!</Link></div>
            }
            <br />
            <br />
            <br />
            <h1 className='total'>Precio final: ${total}</h1>
            <Link className='terminar' to={'/Comprar/'}>finalizar compra</Link></div>





    )
}

export default Cart