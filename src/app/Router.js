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
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="*" element={<div>404</div>} />

                </Route>

            </Routes>
        </BrowserRouter>
    </Provider>

);

export default Router;