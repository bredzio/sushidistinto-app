import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import fondo from '../../../images/cursos.jpg'
import Titulo from '../Titulo';


import { Loading } from './Loading';
import {useParams} from 'react-router-dom';
import {CursoDetail} from './CursoDetail';

import {db} from '../../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

function CursoDetailContainer(){
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState(null);
    const {itemId}=useParams();
    
    
    useEffect( () => {
        setLoading(true)
        
        const docRef = doc(db, "productos", itemId)
       
        getDoc(docRef).then((doc)=>{
           setItem({id:doc.id, ...doc.data()})
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [itemId])
 
    return(
        <>
        <MyDiv>
        <Titulo title="Cursos en Línea" fondo={fondo}/>
                <MyTitle className="display-4 text-center">Detalle de Servicio</MyTitle>
                {
                    loading 
                        ? <Loading/> 
                        : 
                        <CursoDetail {... item}/>
                }
        </MyDiv>
    </>
    );
}
export default CursoDetailContainer;

const MyDiv = styled.div`
    text-align:center;
    flex: 1;
    justify-content: center;
    align-items: center;

`;

const MyTitle = styled.h1`
        color: #333333;
        text-align: left;
        font-weight: bold;
        font-size: 2.5rem;
        margin:50px 0 0px 0px;
`;


