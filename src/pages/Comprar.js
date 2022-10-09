import React, { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from '../app/firebase'
import { AppContext } from '../app/Provider'


const Comprar = () => {

    const { carrito } = useContext(AppContext)
    const { total } = useContext(AppContext)
    const cart = carrito.map(item => ({ key: item.id, nombre: item.nombre, precio: item.precio }))
    const [orders, setOrders] = useState({
        nombre: '',
        telefono: '',
        email: '',
        total: total,
        date: new Date(),
        items: cart

    })
    const hola = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, orders)
            .then(({ id }) => alert(`compra finalizada, su id de compra es:${(id)}`))
    }


    return (
        <div>Comprar

            <form onSubmit={hola}>
                <label >Nombre y apellido</label>
                <input type="text" value={orders.nombre} onChange={(e) => { setOrders({ ...orders, nombre: e.target.value }) }} />
                <label >Email</label>
                <input type="text" value={orders.email} onChange={(e) => { setOrders({ ...orders, email: e.target.value }) }} />
                <label >Num. de Telefono</label>
                <input type="number" value={orders.telefono} onChange={(e) => { setOrders({ ...orders, telefono: e.target.value }) }} />
                <button>comprar</button>
            </form>
            <h3></h3>
            {carrito.length > 0 ? carrito.map(item => <div key={item.id}>
                <br /><h2 >{item.nombre}</h2> <h5>precio: ${item.precio}</h5>
                <br></br>
                <br />

            </div>)

                : console.log('n')
            }
        </div>
    )
}

export default Comprar