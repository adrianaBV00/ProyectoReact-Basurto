import "../css/ItemList.css"
import { Container } from "react-bootstrap"
import Item from "./Item"
const ItemList = ({data,title})=>{
    return(
        <Container className='containerList'>
            <h1 className='title'>{title}</h1>
            <div className='itemList'>
                {data.map((producto)=>(
                    <Item key={producto.id} producto={producto}/>     
                ))}
            </div>
            
        </Container>

    )
}

export default ItemList