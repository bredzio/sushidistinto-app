import React from 'react';
import styled from 'styled-components';

import {CursosList} from '../Cursos/CursosList';
import {ResponseData} from '../../helpers/ResponseData';
import { useEffect, useState } from "react";
import {Loading} from '../Cursos/Loading';
import {useParams} from 'react-router-dom';
import Categorias from './Categorias';



function ContainerCursos(){
    const [cursos, setCursos] = useState([])
    const [loading, setLoading] = useState(false)

    const {cursoId} = useParams();

    useEffect( () => {
        setLoading(true)
        

        ResponseData()
            .then((res) => {
            if(cursoId && 
                res.filter(((el)=>el.categoria===cursoId)).length!==0){
                    setCursos( res.filter(((el)=>el.categoria===cursoId )) )
                }else{
                    setCursos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [cursoId])


    return(
        
        <MySection>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <MyTitle className="display-4 text-center">Precios</MyTitle>
                <MyText className="fs-5 text-mutted">Estás a solo un paso de aprender cómo hacer el mejor sushi sin moverte de tu casa</MyText>

            </div>
            
            <MyDiv>
                {
                    loading 
                        ? <Loading/> 
                        : 
                        <><Categorias/>
                        <CursosList cursos={cursos}/></>
                        
                }
            </MyDiv>

        </MySection> 
    );
}
export default ContainerCursos;



const MySection = styled.section`
        margin: 2rem 0.5rem ;
        text-align:center;
`;

const MyDiv = styled.div`
    text-align:center;
    margin: 0 3rem;
    flex: 1;
    justify-content: center;
    align-items: center;

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
