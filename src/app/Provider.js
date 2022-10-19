import { setDefaultEventParameters } from 'firebase/analytics';
import { createContext, useState } from 'react';


const Provider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [numero, setNumero] = useState(0);



    const agregarAlCarrito = (item, valor) => {
        if (productInCart(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ? { ...product, valor: product.valor + valor } : product
            }))
            setTotal(total + Number(item.precio * valor))
            setNumero(numero + Number(valor))
        } else {
            setCarrito([...carrito, { ...item, valor }])
            setTotal(total + Number(item.precio * valor))
            setNumero(numero + valor)
        }
    }
    let p = carrito.length
    const productInCart = (id) => carrito.find(product => product.id === id) ? true : false

    const removeCarrito = (id) => setCarrito(carrito.filter(product => product.id !== id));

    const menos = (valor) => setNumero(numero - valor);

    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, removeCarrito, total, setTotal, menos, productInCart, numero, setNumero }}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();


export default Provider;
