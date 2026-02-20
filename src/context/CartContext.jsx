import { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = ()=>{
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart debe usarse dentro de un CartProvider')
    }
    return context;
}

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

    // Agregar un item al carrito
    const addCart = (item, qty)=>{
        if(isInCart(item.id)){
            setCart(prevCart=>prevCart.map((prod)=>{
                if(prod.id===item.id){
                    return {... prod, quantity:(prod.quantity+qty), stock:(prod.stock-qty)}
                }
                else{
                    return prod
                }
                    
            }))

        }
        else{
            setCart(prevCart=>[... prevCart,{... item, quantity:qty, stock:(item.stock-qty)}])
        }
    }

    // Eliminar un item del carrito
    const removeItemCart = (id)=>{
        if(isInCart(id)){
            setCart(prevCart=>prevCart.filter((prod)=>prod.id!==id))

        }

    }

    // Saber si un item esta en carrito
    const isInCart = (id)=>{
      return  cart.some((prod)=>prod.id===id)
    }

    // Saber si el carrito esta vacio
    const isEmptyCart = ()=>{
        return cart.length === 0
    }

    // Limpiar el carrito
    const clearCart = ()=>{
        setCart([])
    }

    // Calcular el total del carrito
    const total = ()=>{
        return isEmptyCart()?0.0:cart.reduce((total, prod)=>total+(prod.precio*prod.quantity),0.0)

    }

    // Calcular cuanto articulos hay en el carrito
    const articulosTotales = ()=>{
        return isEmptyCart()?0:cart.reduce((total, prod)=>total + prod.quantity,0)
    }

    const stockItem=(item)=>{
        
        if(isInCart(item.id)){
            return cart.find((prod)=>prod.id===item.id).stock
        }
        else{
            return item.stock
        }
        
    }

    const values = {cart, isEmptyCart, addCart, clearCart, total, articulosTotales,stockItem, removeItemCart}

    return (
        <CartContext value={values}>
            {children}
        </CartContext>
    )
}

