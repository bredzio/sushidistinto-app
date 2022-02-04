import React from 'react';
import Titulo  from '../Titulo';
import fondo from '../../../images/recetas.jpg';
import ServiciosContainer from '../../../components/pages/Servicios/ServiciosContainer';


function Servicios(){
    return(
        <>    
            <Titulo title="Nuestros Servicios" fondo={fondo}/>
            <ServiciosContainer/>
        </>
    );
}
export default Servicios;

