import React from 'react';
import styled from 'styled-components';
import fondo from '../../../images/home.jpg'
import { Link } from "react-router-dom";

function Introduccion(){
    return(
        <>
        <MySection>
            <MyDiv>
                <MyH1>El mejor sushi es el que <br/> hacés vos</MyH1>
                <MyH2>Recetas | Eventos | Talleres</MyH2>
                
                <div className="div-botones">
                    <MyButton to="./cursos" className="btn btn-light btn-lg active botones" role="button" aria-pressed="true">Cursos</MyButton>
                </div>

            </MyDiv>
        </MySection>
        </>
    );
}
export default Introduccion;

    
const MySection=styled.section`
    background-repeat: no-repeat; 
    background-position: center; 
    background-size:cover;
    border-bottom: 10px solid #000;
    z-index: auto; 
    background-attachment:fixed;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:flex-start;
    text-align: center;
    height: 45em;
    padding: 6rem 0;
    background-image: url(${fondo});
`;

const MyH1=styled.h1`
    flex: 1;
    font-size: 60px;   
    font-weight: bold;
    margin: 5px 0 0 0;
    text-align: center;

    -webkit-box-flex: 1;
    -ms-flex: 1;
        flex: 1;
`;

const MyH2=styled.h2`
    flex: 1;
    font-size: 25px;   
    font-weight: bold;
    margin: 30px 0 30px 0;
`;

const MyDiv=styled.div`
    flex: 1;
    margin: 120px 10px 100px 0;
`;


const MyButton = styled(Link)`
    text-align: center;
    background-color: white;
    border-radius: 50px;
    font-size: 20px; 
    padding: 20px 45px;
    font-weight: bold;
    cursor: pointer;
    color: black; 

`;