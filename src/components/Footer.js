import React from 'react';
import styled from 'styled-components';

export default function Footer(){
    let footerBackgroundColor="#77444f";
    let footerBorder="10px solid cadetblue";

    
    const MyFooter=styled.footer`
        background-color:${footerBackgroundColor};
        border-top:${footerBorder};
        height: 6rem;
        padding: 3rem 0;
        flex-wrap: nowrap;

        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    `;

    const Text =styled.p`
         text-align: center; 
        font-size: 15px;
    `;
    
    return(
      <>
        <MyFooter>
            <div> 
                <Text>Copyright 2022 Sushi Distinto - Argentina. Todos los derechos reservados</Text>
            </div>
        </MyFooter>
      </>  
    );
}
