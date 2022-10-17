import { setDefaultEventParameters } from 'firebase/analytics';
import { createContext, useState } from 'react';


const Provider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    // const agregarAlCarrito = (item, valor) => {
    //     setCarrito([...carrito, item, valor])
    //     console.log(carrito)
    //     setTotal(total + Number(item.precio * valor))
    //     console.log(total * valor)
    //     console.log(valor)

    // }
    const agregarAlCarrito = (item, valor) => {
        if (productInCart(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ? { ...product, valor: product.valor + valor } : product
            }))
            setTotal(total + Number(item.precio * valor))
        } else {
            setCarrito([...carrito, { ...item, valor }])
            setTotal(total + Number(item.precio * valor))
        }
    }
    let p = carrito.length
    const productInCart = (id) => carrito.find(product => product.id === id) ? true : false

    const removeCarrito = (id, valor, precio) => setCarrito(carrito.filter(product => product.id !== id));
    // const totalPrice = () => {
    //   return carrito.reduce((prev, act) => prev + act.valor * act.precio, 0)
    //}
    const menos = (precio, valor) => setTotal(total + Number(precio * valor));

    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, removeCarrito, total, setTotal, menos, productInCart }}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();


export default Provider;
