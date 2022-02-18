import { createContext } from "react";
import {useState} from "react";

export const CartContext = createContext()


export const CartProvider =({children})=>{
    
  const [cart, setCart]=useState([])

    const agregarAlCarrito=(item)=>{
      setCart( [...cart, item] )
    }
  
    const isInCart = (id)=>{
      return cart.some((prod)=>prod.id===id)
    }
  
    const cantidadCart=()=>{
      return cart.reduce((acc, prod)=>acc+prod.cantidad,0)
    }

    const valorTotal=()=>{
      return cart.reduce((acc,prod)=>acc+prod.cantidad * prod.precio,0)
    }

    const vaciarCarrito=()=>{
      return setCart([])
    }
    
    return(
        <CartContext.Provider value={{cart, agregarAlCarrito, isInCart, cantidadCart,valorTotal, vaciarCarrito}}>

        {children}
        </CartContext.Provider>

    );
}