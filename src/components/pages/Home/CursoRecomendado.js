import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


function CursoRecomendado(){
    return(
        <>
        <MySection>
            <MyDiv><MyH1> NIVEL 1 </MyH1></MyDiv>
                <MyDiv><Text>Te guío paso a paso como realizar cada una de las piezas como si fueras un profesional.</Text></MyDiv>
                <br/>    
                <MyDiv><Text>Los cursos incluidos en este nivel son: preparaciones de ingredientes, cortes, rolls y presentación final. Si deseas ver más detalles sobre estos cursos puedes visitar la tienda de Sushi Distinto.</Text></MyDiv>
                <br/>
            <MyDiv><MyH2><MySpan>170USD</MySpan> 100USD</MyH2></MyDiv>
            
            <MyDiv className="div-botones-recomendado">
                <MyButton to="./detalle/1" className="btn btn-dark btn-lg active botones" role="button" aria-pressed="true">Quiero ser Sushiman!</MyButton>
            </MyDiv>
        </MySection>    
        </>
    );
}
export default CursoRecomendado;

const MySection = styled.section`
    display: flex;
    align-items:center;
    justify-content:center;
    
    min-height: 700px;    
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 3rem;
    ;
`;  

const MyDiv = styled.div`
    text-align: center;
    line-height: 50px;
    margin: 0 2rem;
`;

const MyH1=styled.h1`
    color: #000;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 0%;
`;

const Text = styled.p`
    color: black;
    font-size: 20px;
`;

const MyH2 = styled.h2`
    color: #000;
    margin-bottom: 1rem;
`;

const MySpan =styled.span`
    color: #000;
    text-decoration: line-through;
    font-weight: bold;
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
