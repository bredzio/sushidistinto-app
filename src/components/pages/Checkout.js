import React from 'react';
import fondo from '../../images/cursos.jpg';
import Titulo  from '../pages/Titulo';

function Checkout(){
    return(
        <Titulo title="Checkout" fondo={fondo}/>
    );
}
export default Checkout;