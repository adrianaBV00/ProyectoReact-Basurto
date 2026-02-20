import '../css/CartWidget.css'
import { FaCartShopping } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { useCart } from "../context/CartContext";

const CarWidget = ()=>{
    const {articulosTotales} = useCart();
    return(
        <div className='cartWidget'>
            <Badge badgeContent={articulosTotales()} color='error'>
                <FaCartShopping size='1.5rem' color="white"/>
            </Badge>            
        </div>
    )
}

export default CarWidget