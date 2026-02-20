import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getOneProduct } from '../mocks/data'
import ItemDetail from './ItemDetail'
import { Container } from 'react-bootstrap'
import { useFetchDetail } from '../hooks/useFetchDetail'
import Loading from './Loading'

export const ItemDetailContainer = () => {
    const {id} = useParams()
    const {detail, loading} = useFetchDetail(id)

    // console.log(detail)

  return (
    <Container>
      {
        loading ? <Loading/> : <ItemDetail key={id} detail={detail} />
      }
        
    </Container>
  )
}

export default ItemDetailContainer
