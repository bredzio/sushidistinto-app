import React from 'react';
import styled from 'styled-components';

import foto1 from '../../../images/Alumnos/alumnos1.jpg';
import foto2 from '../../../images/Alumnos/alumnos2.jpg';
import foto3 from '../../../images/Alumnos/alumnos3.jpg';
import foto4 from '../../../images/Alumnos/alumnos4.jpg';
import foto5 from '../../../images/Alumnos/alumnos5.jpg';
import foto6 from '../../../images/Alumnos/alumnos6.jpg';
import foto7 from '../../../images/Alumnos/alumnos7.jpg';
import foto8 from '../../../images/Alumnos/alumnos8.jpg';
import foto9 from '../../../images/Alumnos/alumnos9.jpg';
import foto10 from '../../../images/Alumnos/alumnos10.jpg';

function Alumnos(){
    return(
        <MySection>
            <MyTitle>Nuestros Alumnos</MyTitle>
            <a href="https://www.instagram.com/sushi_distinto/">
                <GridContainer>
                    <GridItem foto={foto1}></GridItem>
                    <GridItem foto={foto2}></GridItem>
                    <GridItem foto={foto3}></GridItem>
                    <GridItem foto={foto4}></GridItem>
                    <GridItem foto={foto5}></GridItem>
                    <GridItem foto={foto6}></GridItem>
                    <GridItem foto={foto7}></GridItem>
                    <GridItem foto={foto8}></GridItem>
                    <GridItem foto={foto9}></GridItem>
                    <GridItem foto={foto10}></GridItem>
                </GridContainer>    
            </a>
    </MySection>
    );
}
export default Alumnos;


const MySection = styled.section`
    background-color: #fff;
    padding: 50px 0;
    text-align: center;
`;  

const MyTitle =styled.h1`
    color: #000;
    margin: 40px 0 20px 0 ;
    font-size: 50px;
    font-weight: bold;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-auto-rows: minmax(300px,auto);
    gap: 20px;
    padding: 20px;
`;



const GridItem=styled.div`
    border-radius: 4px;
    background-color: #03afff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 300ms;
    
    background-image: url(${props=>props.foto});

    &::after{
        content: "";
        background-color: rgba(179, 229, 252, 0.1);
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transform: scale(0);
                transform: scale(0);
        -webkit-transition: all 300ms;
        transition: all 300ms;
        opacity: 0;  
    }

    &:hover:after{
        opacity: 1;
        -webkit-transform: scale(1);
                transform: scale(1);
        cursor: pointer; 
    }

    &:hover{
        -webkit-transform: scale(1.05);
          transform: scale(1.05);
         cursor: pointer;
    }
`;


