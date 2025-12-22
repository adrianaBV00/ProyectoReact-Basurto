import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';

const CarWidget = ()=>{

    return(
        <div>
            <FaCartShopping size='1.5rem' />
            <span>
                <Badge pill bg="danger">
                    5
                </Badge>
            </span>
            
        </div>
    )
}

export default CarWidget