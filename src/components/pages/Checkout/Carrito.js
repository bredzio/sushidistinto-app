import React,{useContext, useState} from 'react';
import styled from 'styled-components';
import {CartContext} from '../../context/CartContext';
import {Link, Navigate} from 'react-router-dom';

import {Item} from '../Checkout/Item'

import {GenerarOrden} from '../../../firebase/GenerarOrden'
import { validar } from './validar';


import {Abonar} from'./Abonar'
import {ThankYou} from './ThankYou'


function Carrito(){

    const {valorTotal, cantidadCart, cart, vaciarCarrito, comprador, idPago} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)


    const [values, setValues] = useState(comprador)

    const handleInputChange=(e)=>{
      setValues({
        ...values,
        [e.target.name]:e.target.value
      })
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      
      validar(values) && GenerarOrden(values, cart, valorTotal, setOrderId, vaciarCarrito)
      
    }

    if(idPago){
      return <ThankYou order={orderId}/>
    }

    if(orderId){
      return <Abonar/>
    }

    if(cart.length === 0){
      return <Navigate to='/'/>
    }

    return(
      <>
        <MySection className="clase">
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center align-items-center">
                <MyTitle className="display-3 text-center">Carrito</MyTitle>
                <MyText className="fs-5 text-mutted">Estás a solo un paso de aprender cómo hacer el mejor sushi sin moverte de tu casa</MyText>
            </div>
        </MySection>

        <MySection>
            <div className="container">
            <div className="row">
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Tu Compra</span>
                  <span className="badge badge-secondary badge-pill text-muted">{cantidadCart()}</span>
                </h4>
                <ul className="list-group mb-3">

                { cart.map( (el, i) => 
                    <Item key={i} {...el}/>
                )}
                
                  <li className="list-group-item d-flex justify-content-between">
                    <span className="text-dark">Total (USD)</span>
                    <strong className="text-dark">${valorTotal()}.00</strong>
                  </li>
                </ul>
                
                {
                  cantidadCart()===0 
                  ?<Link to="/tienda" className="btn btn-danger">Empezar a comprar</Link>
                  :
                  <button type="submit" className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>

                }
          
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3 text-muted">Facturación</h4>

                <form className="needs-validation" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="firstName" className='text-dark'>Nombre</label>
                      <input type="text" className="form-control text-dark" id="nombre" placeholder="Tu nombre" value={values.nombre} required onChange={handleInputChange} name='nombre'/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>npm
                    <div className="col-md-6 mb-3">
                      <label for="lastName" className='text-dark'>Apellido</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" value={values.apellido} required onChange={handleInputChange} name='apellido'/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="email" className='text-dark'>Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="usuario@email.com" value={values.email} onChange={handleInputChange} name='email'/>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="address" className='text-dark'>Dirección principal</label>
                    <input type="text" className="form-control" id="address" placeholder="Avenida 1234" required value={values.direccion} onChange={handleInputChange} name='direccion'/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
              
      
  
                  <hr className="mb-4"/>
                  <button className="btn btn-danger btn-lg btn-block" type="submit" >Finalizar compra</button>
                  



                </form>
              </div>
            </div>

          </div>
           
          </MySection>
      </>   
    );
}

export default Carrito;

const MySection = styled.section`
        margin: 2rem 0.5rem ;
`;

const MyTitle = styled.h1`
        color: #000;
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
        margin-bottom:3rem;
`;

const MyText = styled.p`
    color: grey;
    margin-bottom:0px;
`;