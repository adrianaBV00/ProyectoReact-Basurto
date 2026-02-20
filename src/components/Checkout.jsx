import React, { useEffect, useState } from 'react'
import '../css/Checkout.css'
import { db } from '../services/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCart } from '../context/CartContext'
import CheckoutForm from './CheckoutForm'
import Loading from './Loading'
const Checkout = () => {
    const {total, cart, isEmptyCart, clearCart} = useCart()
    const [orderId, setOrderId] = useState(null)
    const [process, setProcess] = useState(false)
    const navigate = useNavigate()


    const handleOrder=(data)=>{
        setProcess(true)
        const order = {
            comprador:{
                nombre: data.firstName,
                apellido: data.lastName,
                email: data.email
            },
            compras: cart,
            total: total(),
            date: serverTimestamp()
        }
        const ventas = collection(db,"orders")
        addDoc(ventas, order)
        .then((res)=>{
            setOrderId(res.id)
            clearCart()
        })
        .catch((error)=>{
            console.log(error)
            Swal.fire({
              icon: "error",
              title: "Ocurrió un Error",
              text: "Intente más tarde!"
            });
            navigate('/cart')
        })
        .finally(()=>setProcess(false))
        
        
    }

    useEffect(()=>{
        if(isEmptyCart() && !orderId){
            navigate('/cart')
        }

    },[isEmptyCart(),orderId])
    if(process){
        return <Loading text='Procesando order ...'/>
    }

    return (
        <div className='checkout-view'>
           {
                orderId ?
                <div className='ok-order'>
                    <h1>Muchas gracias por su compra</h1>
                    <h4 >Su orden es: {orderId}</h4>
                    <Link  className='btn btn-danger'to={'/'}>Volver a home</Link>
                </div>
                : <CheckoutForm handleOrder={handleOrder} />
           }
        </div>
    
    )
}

export default Checkout