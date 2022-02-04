import React from 'react';
import Titulo  from '../Titulo';
import fondo from '../../../images/cursos.jpg'
import ContainerCursos from './ContainerCursos';

function Cursos(){
    return(
        <>
        <Titulo title="Cursos en Línea" fondo={fondo}/>
        <ContainerCursos/>
        
        </>
    );
}
export default Cursos;
