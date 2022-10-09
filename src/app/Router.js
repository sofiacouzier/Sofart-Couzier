import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import { Layout } from './Layout';
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../componentes/itemDetailConteiner/ItemDetailContainer';
import Cart from '../pages/Cart';
import Provider from './Provider';
import Comprar from '../pages/Comprar';


const Router = () => (
    <Provider>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product/" element={<ItemListContainer />} />
                    <Route path="/Contact/" element={<Contact />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer />} />
                    <Route path='/Cart' element={<Cart />} />
                    <Route path='/Comprar' element={<Comprar />} />
                    { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
                    <Route path="*" element={<div>404</div>} />

                </Route>

            </Routes>
        </BrowserRouter>
    </Provider>

);

export default Router;