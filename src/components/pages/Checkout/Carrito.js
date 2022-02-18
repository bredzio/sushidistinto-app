import React,{useContext} from 'react';
import styled from 'styled-components';
import {CartContext} from '../../context/CartContext';
import {Item} from '../Checkout/Item'

function Carrito(){

    const {valorTotal, cantidadCart, cart, vaciarCarrito} = useContext(CartContext)

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
                    <strong className="text-dark">${valorTotal()}</strong>
                  </li>
                </ul>
                
                <button type="submit" className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
          
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3 text-muted">Facturación</h4>
                <form className="needs-validation" novalidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="firstName" className='text-dark'>Nombre</label>
                      <input type="text" className="form-control text-dark" id="firstName" placeholder="" value="" required/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="lastName" className='text-dark'>Apellido</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="email" className='text-dark'>Email <span className="text-muted">(Opcional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="usuario@email.com"/>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="address" className='text-dark'>Dirección principal</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label for="address2" className='text-dark'>Dirección secundaria <span className="text-muted">(Opcional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                  </div>

               
                  <hr className="mb-4"/>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="same-address"/>
                      <label className="custom-control-label text-dark" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="save-info"/>
                      <label className="custom-control-label text-dark" for="save-info">Save this information for next time</label>
                    </div>
                  <hr className="mb-4"/>

                  <h4 className="mb-3 text-dark">Pagos</h4>

                  <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                      <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                      <label className="custom-control-label text-dark" for="credit">Mercado Pago</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                      <label className="custom-control-label text-dark" for="debit">PayPal</label>
                    </div>
                
                  </div>
      
  
                  <hr className="mb-4"/>
                  <button className="btn btn-danger btn-lg btn-block" type="submit">Finalizar compra</button>
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