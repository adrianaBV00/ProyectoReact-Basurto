import '../css/NavbarBS.css'

import Container from 'react-bootstrap/Container';
import {Nav, Navbar, Image} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { NavLink } from 'react-router-dom';

import CartWidget from './CartWidget'

const NavbarBS =()=>{
    return(
        <div>
            <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
              <Container fluid>
                <Navbar.Brand as={NavLink} to='/' className='logo'>
                  <Image src="/img/logo-tienda.png" alt='logo tienda' roundedCircle />
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
                      <Nav.Link as={NavLink} to="/category/Figuras">Figuras</Nav.Link>
                      <Nav.Link as={NavLink} to="/category/Peluches">Peluches</Nav.Link>
                      <Nav.Link as={NavLink} to="/category/Ropa">Ropa</Nav.Link>
                      <Nav.Link as={NavLink} to="/category/Accesorios">Accesorios</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <CartWidget  className='carrito'/>
              </Container>
            </Navbar>            
            
        </div>
    )
}

export default NavbarBS