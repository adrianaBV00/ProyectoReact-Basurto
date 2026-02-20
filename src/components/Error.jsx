import React from 'react'
import '../css/Error.css'
import { BiSolidErrorAlt } from "react-icons/bi";

const Error = () => {
  return (
    <div className='error'>
        <div>
            <h1><BiSolidErrorAlt /> Problemas técnicos</h1>
        </div>
        <div>
            <h3>Intente más tarde</h3>
        </div>
        
    </div>
  )
}

export default Error