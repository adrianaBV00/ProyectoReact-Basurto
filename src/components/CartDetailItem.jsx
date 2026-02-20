import React from 'react'
import '../css/CartDetailItem.css'
import { useCart } from '../context/CartContext'
import { Button , Col, Row} from 'react-bootstrap'
const CartDetailItem = ({detail}) => {
    const {removeItemCart} = useCart()
    return (
        <div className='cart-detail-item'>
            <img src={detail.imagen} alt={detail.nombre}/>
            <p>{detail.nombre}</p>
            <p>{detail.quantity} {detail.quantity>1?'pzs':'pz'}</p>
            <p>$ {parseFloat(detail.quantity * detail.precio).toFixed(2)} MXN</p>
            <Button onClick={()=>{removeItemCart(detail.id)}} className='btn-eliminar'>Eliminar</Button>
        </div>
    )
}

export default CartDetailItem
