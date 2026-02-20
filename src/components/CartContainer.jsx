import React from 'react'
import CartEmpty from './CartEmpty'
import CartView from './CartView'
import { useCart } from '../context/CartContext'
const CartContainer = () => {
    const {isEmptyCart} = useCart()
    return (
        <>
            {
                isEmptyCart() ? <CartEmpty/> : <CartView/>
            }
        </>
    )
}

export default CartContainer