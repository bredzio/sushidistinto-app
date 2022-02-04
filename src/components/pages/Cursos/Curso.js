import React from 'react';
import styled from 'styled-components';

export const Curso = ( {title, contenido, precio, id} ) => {

    return (
        <div className="col-12 mb-2 col-md-4 text-center">                    
                <div className="card shadow-sm border-danger" >
                    <div className="card-body">
                        <h4 className="card-header py-3 text-white bg-danger border-danger">{title}</h4> 
                        <MyPrice className="my-3 font-weight-normal text-center">${precio}<small className="text-muted">/+iva</small></MyPrice>
                        <ul className="list-unstyled mt-3 mb-4">
                            {contenido.map((el, i)=>
                                <MyText key={i}>{el}</MyText>
                            )}             
                            
                        </ul>
                        <button className="btn btn-outline-danger btn-lg w-100" id="agregar">+ info</button>
                    </div>
                </div>   
        </div>
    )
}

const MyPrice = styled.h1`
        color: black;
        font-size:2rem;
        text-align: left;
        
`;


const MyText = styled.li`
    color:black;
`;