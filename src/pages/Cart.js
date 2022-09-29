import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../app/Provider'

const Cart = () => {
    const { carrito } = useContext(AppContext)

    const { removeCarrito } = useContext(AppContext)


    return (
        <div>
            <h1>Cart</h1>
            <div>
                Aqui apareceran los productos elegidos
            </div>
            {carrito.length > 0 ? carrito.map(item => <div key={item.id}><br /><h2 >{item.nombre}</h2> <h5>precio: ${item.precio}</h5><button onClick={() => removeCarrito(item.id)}>eliminar producto</button></div>) : <Link to={'/product/'}>Comenza a comprar!</Link>
            }


        </div >
    )
}

export default Cart