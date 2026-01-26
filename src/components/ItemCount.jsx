import React, { useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa";

import { Button, Stack, Col } from 'react-bootstrap'
const ItemCount = ({stock}) => {
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
    }



  return (
    <Stack direction='horizontal' gap={3}>
        <div>
            <Button className='btn btn-sm' onClick={disminuir} disabled={counter===1}><FaMinus /></Button>
        </div>
        <div>
            <span>{counter}</span>
        </div>
        <div>
            <Button className='btn btn-sm' onClick={aumentar} disabled={counter===stock}><TiPlus /></Button>
        </div>
        <div>
            <Button className='btn btn-sm' onClick={agregarCarrito} disabled={counter===0}>Agregar <MdAddShoppingCart /></Button>
        </div>
        
        
        
        
    </Stack>
  )
}

export default ItemCount