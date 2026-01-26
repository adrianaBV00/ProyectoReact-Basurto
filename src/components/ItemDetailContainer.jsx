import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../mocks/data'
import ItemDetail from './ItemDetail'
import { Container } from 'react-bootstrap'

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        getOneProduct(id)
            .then((res)=>setData(res))
            .catch((error)=>console.log(error))

    },[id])
    console.log(data)

  return (
    <Container>
        <ItemDetail detail={data} />
    </Container>
  )
}

export default ItemDetailContainer
