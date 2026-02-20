import React from 'react'
import { useCart } from '../context/CartContext'
import CartDetailItem from './CartDetailItem'

const CartList = () => {
    const {cart} = useCart()
  return (
    <>  
        {
            cart.map(item =><CartDetailItem key={item.id} detail={item}/>)
        }
    
    </>
    
  )
}

export default CartList