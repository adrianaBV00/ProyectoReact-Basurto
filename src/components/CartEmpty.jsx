import React from 'react'
import "../css/CartEmpty.css"
import { BsCart4 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const CartEmpty = () => {
    return (
    <>
        <Container className='cartEmpty'>
            
            <BsCart4 size={'15rem'}/>

            <span>Su carrito está vacio</span>

            <Link to="/" className='btn btn-danger'>Comenzar a comprar</Link>

        </Container>
        
    </>
    
  )
}

export default CartEmpty