import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Item.css'

const Item = ({ producto }) => {
    const { id, nombre, imagen, precio,moneda} = producto;
    return (
        <div classnombre='item'>
            <Card style={{ width: "18rem"}} bg='dark'>
                <Card.Img variant="top" src={imagen} className='imageItem'/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text className='precio'>
                        ${parseFloat(precio).toFixed(2)} {moneda}
                    </Card.Text>
                    <Link className='btn btn-danger btn-detalle' to={`/item/${id}`}>VER DETALLES</Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Item;
