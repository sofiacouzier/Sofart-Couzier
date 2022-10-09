import { setDefaultEventParameters } from 'firebase/analytics';
import { createContext, useState } from 'react';


const Provider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
        console.log(carrito)
        setTotal(total + Number(item.precio))
        console.log(total)
    }
    let p = carrito.length

    const removeCarrito = (id) => setCarrito(carrito.filter(product => product.id !== id));

    const menos = (precio) => setTotal(total - Number(precio));

    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, removeCarrito, total, setTotal, menos }}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();


export default Provider;
