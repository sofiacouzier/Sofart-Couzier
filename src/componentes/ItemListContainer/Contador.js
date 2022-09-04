import React from 'react'
const Contador = ({ Productos, inicio, onAdd }) => {

    const [valor, setValor] = React.useState(0);
    return (
        <div>

            <div className='stock'>
                <button className='sumar' onClick={() => {
                    inicio = 0
                    setValor(valor - 1)
                    valor > inicio ? setValor(valor - 1) : setValor(inicio)
                }}>-</button>
                <p className='hola'>{valor}</p>
                <button className='sumar' onClick={() => {
                    valor < Productos ? setValor(valor + 1) : setValor(Productos)
                }}>+</button>

            </div >
            <button className='carritoBoton' onClick={() => onAdd(valor)}>Añadir al carrito</button>
        </div >
    )
}

export default Contador