import React from 'react'
import '../css/Loading.css'
import {PulseLoader} from "react-spinners"
import { Container } from 'react-bootstrap'
const Loading = ({text = "LOADING"}) => {
  return (
    <>
      <Container className='loading'>
          <span>{text}</span>
          <PulseLoader color='#DC2F02' size='1.5rem'/> 
      </Container>
    
    </>
    
  )
}

export default Loading