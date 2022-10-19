import React from 'react'
import ItemDetailContainer from '../componentes/itemDetailConteiner/ItemDetailContainer'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
const Home = () => {
    return (

        <div>
            <div className='intro'>
                <h1 className='uno'>SOFART</h1>
                <h2 className='dos'>espacio lleno de arte para disfrutar
                </h2>
            </div>
            <ItemListContainer />


        </div>



    )
}

export default Home