import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


import {CartContext} from "../../context/CartContext";

export const CursoDetail=({title, contenido, precio, id})=>
{   
    const [cantidad, setCantidad] = useState(1);
    const {agregarAlCarrito, isInCart} = useContext(CartContext);

    const handleAgregar=()=>{
        if(cantidad === 0) return

        if(!isInCart(id)){
            const addCurso={
                id, title,contenido,precio, cantidad
            }
            console.log(addCurso)
            agregarAlCarrito(addCurso)

        }

    }

    return(
        <>
            <div className="container align-items-center">
                <MyDiv className="row">
                    <div className="col-md-5">
                            <MyH1>{title}</MyH1>
                            <MyH2> <MySpan>{precio*1.7}USD</MySpan>  {precio}USD</MyH2>
                            <MyH2>Después de tomar este curso, podrás realizar proyectos profesionales y aplicar a trabajos en el campo de la gastronomía oriental.</MyH2>
                            <MyH2>Este curso incluye elaboración de:</MyH2>
                            <Text>
                            {
                                contenido
                                ?  contenido.map((el, i)=>
                                    <MyText key={i}>{el}</MyText>
                                )
                                :null
                            }
                            </Text>
                            <MyH2>Forma parte de la red de alumnos de Sushi Distinto y aprende de un instructor con experiencia. Si tomas tu carrera en serio, este es el curso para ti.</MyH2>
                    </div>
                
              
                    <div className="col-md-offset-1 col-md-5 checkout-content-left">
                            <PanelCheckout>
                            
                                <PanelHeading>
                                    <MyH1>${precio}.00 USD</MyH1>
                                </PanelHeading>

                                <PanelBody>
                                    <FormControl className="form-control">
                                        <FormGroup>
                                            <input className="form-control string email required form-control required"  placeholder="Nombre" type="text" value="" ></input>
                                        </FormGroup>

                                        <FormGroup>
                                            <input className="form-control string email required form-control required"  placeholder="Apellido" type="text" value="" ></input>
                                        </FormGroup>

                                        <FormGroup>
                                            <input className="form-control string email required form-control required"  placeholder="Dirección de correo electrónico" type="email" value="" ></input>
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <MyLabel className="boolean required">
                                                <MyCheckbox className="boolean required" required="required" aria-required="true" type="checkbox" ></MyCheckbox>
                                                Suscríbase a nuestra lista de correo electrónico.                                            
                                            </MyLabel>
                                        </FormGroup>
    

                                        <FormGroup>
                                            <MyLabel className="boolean required">
                                                <MyCheckbox className="boolean required" required="required" aria-required="true" type="checkbox" ></MyCheckbox>
                                                He leído y acepto los términos y condiciones de esta página.
                                            </MyLabel>
                                        </FormGroup>

                                        <FormButtom>
                                        {
                                            isInCart(id)
                                            ?<Link to="/checkout" className="btn btn-danger btn-lg w-100">Terminar Compra</Link>
                                            :
                                            
                                            
                                            <button className="btn btn-danger btn-lg w-100" onClick={handleAgregar}>Agregar al carrito</button>
                                        }
                                            </FormButtom>
                                        
                                    </FormControl>

                                </PanelBody>

                            </PanelCheckout>
                            
                    </div>
                </MyDiv>            
                                
            </div>   
    

        </>
    );
}

const MySpan =styled.span`
    color: #000;
    text-decoration: line-through;
    font-weight: bold;
`;

const MyCheckbox=styled.input`
    outline: none;
    left: 0;
    top: 0.25rem;
    width: 0.875rem;
    height: 0.875rem;
    cursor: pointer;
    color: #556370;
    border: solid 1px #c7cfd8;
    border-radius: 2px;

    margin-right:0.625rem;

`;

const MyLabel= styled.label`
    display: inline-block;
    max-width: 100%;
    font-size: 13px;
    position: relative;
    color: #556370;
    margin-left:10px;
`;

const FormGroup=styled.div`
    margin-bottom: 1.25rem;
    text-align:left;
    justify-content:center;
`;

const FormButtom=styled.div`
    margin-bottom: 20px;
    text-align:center;
    justify-content:center;
`;


const PanelCheckout = styled.div`
    border: none;
    border-radius: 4px;
    box-shadow: 0 15px 20px 0 rgba(0,0,0,0.1);

    margin-bottom: 20px;
    background-color: #fff;
    box-sizing: border-box;

`;

const FormControl = styled.div`
    box-shadow: none;
    border-radius: 4px;
    border: none;
    background: #fff;

    
`;


const PanelHeading = styled.div`
    padding:20px;
    border-bottom: 1px solid #e5e9e9;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    

`;

const PanelBody = styled.div`
    box-sizing: border-box;
    padding: 15px;
`;


const MyText = styled.li`
    color:black;
    text-align:left;
    font-size: 1rem;
    font-weight: bold;
`;
  

const MyDiv=styled.div`
   justify-content: center;
   display: flex;
    
   text-align: center;
   align-items:center;
    gap: 5rem;
    padding:0 2srem;
    margin:5rem 0;

    
`;

const MyH1 = styled.h1`
    font-weight: bold;
    text-align: left;

    font-size: 30px;
    line-height: 1.71;
    color: #333333;
`;

const MyH2 = styled.h2`
    text-align: left;
    font-size: 18px;
    line-height: 1.51;
    color: #333333;
`;


const Text = styled.p`
    font-size: 10px;
    font-weight: normal;
    margin-top: 10px;
    line-height: 1.71;
    margin-left:30px;
`;



