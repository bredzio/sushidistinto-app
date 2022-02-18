import React from 'react';
import fondo from '../../../images/cursos.jpg';
import Titulo  from '../Titulo';
import Carrito from './Carrito';

function Checkout(){
    return(
        <>
            <Titulo title="Checkout" fondo={fondo}/>
            <Carrito/>
        </>
    );
}
export default Checkout;