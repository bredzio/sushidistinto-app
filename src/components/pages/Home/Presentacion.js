import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

function Presentacion(){
    return(
        <MySection>
            <MyDiv className="container">
                <MyDiv className="row">
                    <div className="col">
                            <MyH1>Conoce a tu instructor</MyH1>
                            <Text>Victor Hugo Redzio, es Sushiman en Sushi Distinto. Ha trabajado en proyectos para distintas empresas gastronómicas en todo el mundo. Trabaja como líder de equipos hace más de 5 años y comparte videos semanalmente en redes sociales desde Buenos Aires, Argentina.</Text>
                            <MyH2><Redes href="https://www.instagram.com/sushi_distinto/">Instagram</Redes> | <Redes href="https://www.facebook.com/Sushidistinto">Facebook</Redes> | <Redes href="https://www.tiktok.com/@sushi_distinto">TikTok</Redes></MyH2>
                    </div>

                    <DivVideo>
                        <MyVideo src="https://fast.wistia.net/embed/iframe/zphfs37ir1?seo=false" title="clip victor Video" allowtransparency="true" frameborder="0" scrolling="no" name="wistia_embed" allowfullscreen msallowfullscreen width="640" height="360" />
                    </DivVideo>
                </MyDiv>
            </MyDiv>   
        </MySection>
    );
}
export default Presentacion;

let hoverColor="#A25768";   

const MySection = styled.section`
    display: flex;
    align-items:center;
    justify-content:center;
    
    background-color: #000;
    min-height: 700px;  
    flex-direction:row;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 3rem;
`;  


const MyDiv=styled.div`
   justify-content: center;
   margin: 0 2rem;
   padding: 3rem 0;
`;

const MyH1 = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    text-align: left;
`;

const Redes = styled.a`
    color:#fff;
    text-decoration: none;

    &:hover{
        color:${hoverColor};
        text-decoration: none;
    }
`;

const MyH2 = styled.h2`
    font-size: 1rem;
    color:#03afff;
    font-weight: normal;
    text-align: left;
    margin-top: 20px;
`;

const Text = styled.p`
    font-size: 1.1rem;
    font-weight: normal;
    margin-top: 10px;
`;

const MyVideo = styled(Iframe)`
    border-radius: 10px;
`;

const DivVideo=styled.div`
    display: flex;
    width: 60%;
    margin: 1px;
`;