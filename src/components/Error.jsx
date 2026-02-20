import React from 'react'
import '../css/Error.css'
import { MdOutlineSyncProblem  } from "react-icons/md";

const Error = () => {
  return (
    <div className='error'>
        <MdOutlineSyncProblem size='6.5rem'/>
        <h1>Ocurrió un Problema</h1>
        <h3>Intente más tarde</h3>
        
    </div>
  )
}

export default Error