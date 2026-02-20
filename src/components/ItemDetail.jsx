import React, {useState } from 'react'
import {Image, Row, Col} from 'react-bootstrap';
import ItemCount from './ItemCount';
import '../css/ItemDetail.css'
import { CartProvider, useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const ItemDetail = ({detail}) => {
    const {nombre, imagen, detalle, precio, moneda, rating, especificaciones, contenido_caja} = detail
    const {addCart,stockItem}=useCart()
    const [comprado, setComprado ]= useState(false)
    const onAdd = (counter)=>{
        addCart(detail,counter)
        setComprado(true)
    }

    // console.log(stockItem(detail))
    
    

    
    
    return (
        <div className='detail-container'>

            <Row >
                <Col>
                    <h1 className='titleDetail'>{nombre}</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <Image src={imagen} alt={nombre} className='imgDetail'/>
                </Col>
                <Col sm={6} >
                    <Row>
                        <div className='item-agregar'>
                            <Rating name="rating-read" value={rating} precision={0.1} readOnly />
                            <p className='item-precio'>${parseFloat(precio).toFixed(2)} <span>{moneda}</span></p>
                            {detail?.anime && <p>{detail.anime}</p>}
                            {detail?.coleccion && <p>{detail.coleccion}</p>}
                            {stockItem(detail) ? <p className='item-stock'>Solo {stockItem(detail)>1?'quedan':'queda'}: <span>{stockItem(detail)} {stockItem(detail)>1?'piezas':'pieza'}</span></p>:<></>}
                            <hr />
                            {
                                comprado ?
                                <Link className='btn btn-danger' to="/cart">IR AL CARRITO</Link> :
                                <Row classnombre='item-count'>
                                    <ItemCount stock={stockItem(detail)} onAdd={onAdd}/>
                                </Row>
                            }

                        </div>
                        
                        
                        
                        
                        
                    </Row>
                    <Row>
                        <h5>Detalle del Producto</h5>
                        <hr />
                        
                        <p>{detalle}</p>
                        <h5>Especificaciones</h5>
                        <hr />
                        <ul>
                            {Object.entries(especificaciones).map(([key,value])=>(
                                <li key={key}>{key.toUpperCase()}: {value}</li>
                            ))}

                        </ul>
                        <h5>Contenido caja</h5>
                        <hr />
                        <ul>
                            {contenido_caja.map((value)=><li key={value}>{value}</li>)}

                        </ul>
                        


                        <hr />

                        
                    </Row>
                    
                    
                
                </Col>
                
            </Row>
        </div>
    )
}

export default ItemDetail
