import React from 'react'
import {Image, Row, Col} from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css'
const ItemDetail = ({detail}) => {
    const {name, img, description, category, price, stock} = detail
  return (
    <>
        <Row >
            <Col>
                <h1>{name}</h1>
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <Image src={img} alt={name} style={{ width: '100%'}}/>
            </Col>
            <Col sm={4} >
                <Row>
                    <p>Categoria: {category}</p>
                    <p>Precio: ${parseFloat(price).toFixed(2)}</p>
                    <p>{description}</p>
                </Row>
                <Row className='itemCount'>
                    <ItemCount stock={stock}/>
                </Row>
                
            </Col>
                
        </Row>
        
        
        


    </>
  )
}

export default ItemDetail
