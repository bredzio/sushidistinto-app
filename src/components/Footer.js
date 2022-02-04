import React from 'react';
import styled from 'styled-components';

function Footer(){
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
export default Footer;

let footerBackgroundColor="#77444f";
let footerBorder="10px solid cadetblue";

const MyFooter=styled.footer`
    background-color:${footerBackgroundColor};
    border-top:${footerBorder};
    height: 6rem;
    padding: 3rem 0;
    flex-wrap: nowrap;

    left: 0;
    bottom: 0;
    width: 100%;
`;

const Text =styled.p`
     text-align: center; 
    font-size: 15px;
`;
