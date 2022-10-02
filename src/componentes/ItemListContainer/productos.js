import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { useEffect, useState } from "react";

const Productos = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDocs(collection(db, 'items'))
            const pr = (data.docs.map(doc => doc.data()))
            setProduct(pr)
        }
        fetchData()
    }, [])

}


// const producto = [
//     { id: 0, nombre: 'cuadro', precio: 1000, stock: 2 },
//     { id: 1, nombre: 'cuadro1', precio: 1200, stock: 4 },
//     { id: 2, nombre: 'cuadro3', precio: 900, stock: 6 },
// ]
export default Productos