import React from 'react'
import '../css/Error.css'
import { BiSolidErrorAlt } from "react-icons/bi";

const Error = () => {
  return (
    <div className='error'>
        <div>
            <h1><BiSolidErrorAlt /> Error 404</h1>
        </div>
        <div>
            <h3>Pagina no encontrada</h3>
        </div>
        
    </div>
  )
}

export default Error