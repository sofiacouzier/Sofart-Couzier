import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img className='foto' src="../img/foto.webp" width={35} alt="" />
                <Navbar.Brand href="#home">Sofart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">costumizados</Nav.Link>
                        <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">conocenos</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">contacto</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <nav>
                        <CartWidget></CartWidget>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;