import { createContext, useState } from 'react';


const Provider = ({ children }) => {

    const [carrito, setCarrito] = useState('');

    const agregarAlCarrito = (item) => {
        setCarrito((prevState) => [...prevState, item])
        console.log(carrito)

    }
    return (
        <AppContext.Provider value={{ carrito, setCarrito, agregarAlCarrito }}>
            {children}
        </AppContext.Provider>
    );
}
export const AppContext = createContext();


export default Provider;
