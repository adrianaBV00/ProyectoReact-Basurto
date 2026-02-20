import React from 'react'
import '../css/CartView.css'
import Swal from 'sweetalert2'
import {useCart} from '../context/CartContext'
import CartList from './CartList'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const CartView = () => {
    const {total, clearCart} = useCart()

    const handleVaciarCarrito = ()=>{
         
        Swal.fire({
          title: "Desea vaciar el carrito?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, vaciar carrito"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Borrado!",
              text: "Se ha vaciado el carrito",
              icon: "success"
            });
            clearCart()
          }
        });

    }
    return (
        <div className='cart-view'>
            <h1 className='cart-title'>Carrito</h1>
            <CartList/>

            <div className='total-pagar'>
                <span>Total a pagar: ${total()} MXN</span>
            </div>
            <div className='cart-botones'>
                <Button onClick={handleVaciarCarrito}>Vaciar carrito</Button>
                <Link className='btn btn-danger' to="/checkout">Continuar con el pago</Link>
            </div>
           
        </div>
  )
}

export default CartView