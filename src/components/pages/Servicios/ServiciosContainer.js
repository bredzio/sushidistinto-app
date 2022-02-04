import React from 'react';
import styled from 'styled-components';

import foto1 from '../../../images/servicios/batidora.jpg';
import foto2 from '../../../images/servicios/pieza.jpg';
import foto3 from '../../../images/servicios/plato.jpg';

function ServiciosContainer(){
    return(
        <>

        <ContainerServicios>
            
            <MyDiv>
                <MyImg src={foto1}/>
                <MyH1>Take Away</MyH1>
                <MyText>El mejor sushi de Buenos Aires dónde y cuando quieras. Tú escoges tus piezas y diseña el pedido, que nosotros lo cocinaremos al momento para ti. Por fin el sushi de calidad está disponible online al mejor precio. ¡Haz tu pedido!</MyText>
            </MyDiv>

           <MyDiv>
                 <MyImg src={foto2}/>
                <MyH1>Talleres</MyH1>
                <MyText>Experiencias 100% online (¡pero no pegados a una pantalla!), porque aunque conectados estamos cocinando. Cocinarás con el chef y con los demás, aprendiendo recetas, tradiciones de los platos y sus propiedades.</MyText>
            </MyDiv>

            <MyDiv>
                <MyImg src={foto3}/>
                <MyH1>Catering</MyH1>
                <MyText>La mejor opción para tus eventos. Sorprende a tus invitados con un showcooking de los mejores maestros japoneses: productos de primera calidad elaborados en directo para tus invitados. ¡Contáctanos!</MyText>
             </MyDiv>
        </ContainerServicios>

        </>
    );
}
export default ServiciosContainer;

const ContainerServicios=styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    margin:70px 50px;
    gap:50px;
`;

const MyDiv = styled.div`
    padding: 10px;
    max-width: 400px;
`;

const MyH1 = styled.h1`
    color: black;
    font-weight: bold;
    text-align: left;
    margin: 20px 0;
`;

const MyText = styled.p`
    color: black;
    text-align: left;
    font-size: 1rem;
    line-height: 30px;
`;

const MyImg = styled.img`
    width: 18rem;
    height: 18rem;
    border-radius: 5px;
    margin: 10px 0;
`;
