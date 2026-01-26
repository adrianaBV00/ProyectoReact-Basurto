import {Container, Row} from 'react-bootstrap';
import { getProducts } from '../mocks/data';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../css/ItemListContainer.css'

const ItemListContainer = ({titulo})=>{
    const [data, setData] = useState([]);
    const {type} = useParams()

    useEffect(()=>{
        getProducts(type)
            .then((res)=>setData(res))
            .catch((error)=>console.log(error))

    },[type])
    console.log(data)

    return(
        <Container fluid className='container'>
            <h1>{titulo}</h1>
            <ItemList data={data}/>
        </Container>
    )
}

export default ItemListContainer