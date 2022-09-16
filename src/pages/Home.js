import React from 'react'
import ItemDetailContainer from '../componentes/itemDetailConteiner/ItemDetailContainer'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
const Home = () => {
    return (

        <div>

            <ItemListContainer cantidad={"estos"} />
            <ItemDetailContainer />

        </div>



    )
}

export default Home