import React from 'react';
import CursoRecomendado from './CursoRecomendado';
import Introduccion from './Introduccion';
import Presentacion from './Presentacion';
import Alumnos from './Alumnos';

function Home(){
    return(
        <>
            <Introduccion/>
            <CursoRecomendado/>
            <Presentacion/>
            <Alumnos/>
        </>
    );
}
export default Home;

