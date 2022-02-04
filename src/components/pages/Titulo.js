import React from 'react';
import styled from 'styled-components';

function Titulo(props){
    const {title, fondo}=props;
    
    return(
        <MySection fondo={fondo}>
            <MyDiv>
                <MyH1 >{title}</MyH1>
            </MyDiv>
        </MySection>
    );
}
export default Titulo;

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
        
        
        height: 40em;
        padding: 6rem 0;
        background-image: url(${props=>props.fondo});
    `;

    const MyH1=styled.h1`
        flex: 1;
        font-size: 60px;   
        font-weight: bold;
        margin: 5px 0 0 0;
        text-align: center;
    `;

    const MyDiv=styled.div`
        flex: 1;
        margin: 120px 10px 100px 0;
    `;