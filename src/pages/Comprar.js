import React, { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { db } from '../app/firebase'
import { AppContext } from '../app/Provider'


const Comprar = () => {
    const { numero } = useContext(AppContext)
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
        <div>

            <form className='comprar' onSubmit={hola}>
                <h1 className='dat'>Completa tus datos!</h1>
                <label className='label' >Nombre y apellido</label>
                <input type="text" value={orders.nombre} onChange={(e) => { setOrders({ ...orders, nombre: e.target.value }) }} />
                <label className='label'>Email</label>
                <input type="text" value={orders.email} onChange={(e) => { setOrders({ ...orders, email: e.target.value }) }} />
                <label className='label'>Num. de Telefono</label>
                <input type="number" value={orders.telefono} onChange={(e) => { setOrders({ ...orders, telefono: e.target.value }) }} />
                <h2 className='tf'>precio total: ${total}</h2>
                <h2 className='tf'>cantidad de productos: {numero}</h2>
                <button className='compra'>comprar</button>
            </form>
            <h3></h3>

        </div>
    )
}

export default Comprar