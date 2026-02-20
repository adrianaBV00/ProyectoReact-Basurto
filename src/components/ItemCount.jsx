import React, { useState } from 'react'
import '../css/ItemCount.css'
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button, Stack, Col } from 'react-bootstrap'

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1)


    const aumentar = ()=>{
        if(counter<stock){
            setCounter(prev=>prev+1)
        }
    }

    const disminuir = ()=>{
        if(counter>1){
            setCounter(prev=>prev-1)
        }
    }

    const agregarCarrito = ()=>{
        console.log("Se ha agregado al carrito")
        onAdd(counter)
    }

    if(!stock){
        return(
            <>
                <Button disabled>AGOTADO</Button>
            </>
        )
    }
    

  return (

    <div className='itemCount'>
        <Button className='btn btn-danger btn-sm' onClick={disminuir} disabled={counter<=1}><FaMinus /></Button>
        <span>{counter}</span>
        <Button className='btn btn-danger btn-sm' onClick={aumentar} disabled={counter===stock}><TiPlus /></Button>
        <Button className='btn btn-danger btn-sm' onClick={agregarCarrito} disabled={counter===0}>AGREGAR AL CARRITO</Button>
        
    </div>
    
  )
}

export default ItemCount