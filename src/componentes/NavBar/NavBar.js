import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
            <Container>
                <img className='foto' src="../IMG/foto.webp" width={30} alt="" />

                <Navbar.Brand href="#home"><Link className='linknav' to='/'>SOFART</Link></Navbar.Brand>
                <li><Link className='linknav' to={`/product/`}>Productos</Link></li>
                <li><Link className='linknav' to={`/category/retrato/`}>personas</Link></li>
                <li><Link className='linknav' to={`/category/paisaje/`}>paisajes</Link></li>
                <li><Link className='linknav' to='/Contact/'>Contacto</Link></li>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <nav>
                    <CartWidget></CartWidget>


                </nav>
            </Container>
        </Navbar >
    );
}

export default NavBar;