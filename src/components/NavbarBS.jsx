import '../css/NavbarBS.css'

import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Image} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavLink } from 'react-router-dom';

import CartWidget from './CartWidget'

const NavbarBS =()=>{
    return(
        <>
            <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed='top'>
              <Container>
                <Navbar.Brand as={NavLink} to='/' >
                  <Image src="/img/logo-tienda.png" alt='logo tienda' className='logo' />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                <Navbar.Offcanvas
                  id='offcanvasNavbar-expand-sm'
                  aria-labelledby='offcanvasNavbarLabel-expand-sm'
                  placement="start"
                  
                  className='offCanvas'
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-sm'>
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-around flex-grow-1 pe-3">
                      <Nav.Link as={NavLink} className='navbarOption' to="/category/Figura Anime">Figuras Anime</Nav.Link>
                      <Nav.Link as={NavLink} className='navbarOption' to="/category/Carta Coleccionable">Cartas Coleccionables</Nav.Link>
                      <Nav.Link as={NavLink} className='navbarOption' to="/category/destacado">Destacado</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Nav.Link as={NavLink} to="/cart">
                  <CartWidget  className='carrito'/>
                </Nav.Link>
                
              </Container>
            </Navbar>            
            
        </>
    )
}

export default NavbarBS