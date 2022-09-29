import { createContext, useState } from 'react';


const Provider = ({ children }) => {

    const [carrito, setCarrito] = useState('');

    const agregarAlCarrito = (item) => {
        setCarrito((prevState) => [...prevState, item])
        console.log(carrito)

    }
    let p = carrito.length

    const removeCarrito = (id) => setCarrito(carrito.filter(product => product.id !== id));
    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, removeCarrito, }}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();


export default Provider;
