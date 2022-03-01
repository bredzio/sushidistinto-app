import React,{useEffect, useRef, useContext} from 'react'
import {CartContext} from '../../context/CartContext';


export default function Paypal(){
    const {valorTotal} = useContext(CartContext)
    const paypal=useRef()
    
    const {setIdPago} = useContext(CartContext)
    

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                        description:"Cool looking table",
                            amount:{
                                    currency_code:"USD",
                                    value:valorTotal()
                                }
                    }
                    ]
                })
            },
            onApprove:async(data,actions)=>{
                return actions.order.capture()
                .then(function(details)
                  {
                    setIdPago(details.id);                
                   })
            },
            onError:(err)=>{
                console.log(err)
            }
        }).render(paypal.current)
    },[])

    return(
     <div>
            <div className="btn btn-lg btn-block" ref={paypal}></div>
    </div>       
   
    )
}