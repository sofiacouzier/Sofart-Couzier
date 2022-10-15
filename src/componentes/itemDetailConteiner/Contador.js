import React from 'react'

const Contador = ({ stock, inicio, onAdd }) => {


    const [valor, setValor] = React.useState(0);
    return (
        <div>

            <div className='stock'>
                <button className='sumar' onClick={() => {
                    inicio = 0
                    setValor(valor - 1)

                }} disabled={valor < 1}>-</button>
                <p className='hola'>{valor}</p>
                <button className='sumar' onClick={() => {
                    setValor(valor + 1)
                }} disabled={valor > stock - 1}>+</button>

            </div >
            <button type="button" onClick={() => { onAdd(valor) }}>
                Añadir al carrito
            </button>
        </div >
    )
}

export default Contador