import React, { useContext } from 'react'
import { AppContext } from '../app/Provider'

const Cart = () => {
    const { carrito } = useContext(AppContext)
    console.log(carrito)
    return (
        <div>
            <h1>Cart</h1>
            <div>
                Aqui apareceran los productos elegidos
            </div>
            {carrito.length > 0 ? carrito.map(item => <h2 key={item.id}>{item.nombre}</h2>) : "vacio"

            }
        </div>
    )
}

export default Cart