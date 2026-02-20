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
            <p>{detail.quantity} pzs</p>
            <p>$ {detail.quantity * detail.precio} MXN</p>
            <Button onClick={()=>{removeItemCart(detail.id)}}>Eliminar</Button>
        </div>
    )
}

export default CartDetailItem
