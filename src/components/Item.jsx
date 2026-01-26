import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Item.css'

const Item = ({ producto }) => {
    const { id, name, img, price,category } = producto;
    return (
        <div className='item'>
            <Card style={{ width: "15rem"}}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{category.toUpperCase()}</Card.Title>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text>
                        ${parseFloat(price).toFixed(2)}
                    </Card.Text>
                    <Link className='btn btn-primary' to={`/item/${id}`}>Mas detalle</Link>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Item;
