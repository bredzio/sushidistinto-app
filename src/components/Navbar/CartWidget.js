import React from 'react';
import styled from 'styled-components';


export default function Cart(){
    
    return(
        <>
        <MyCart type='button'>
            <MySvg xmlnsXlink="http://www.w3.org/2000/svg"  fill="CurrentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </MySvg>               
            <MyCartBadge className="icon-button__badge" id="countCart">0</MyCartBadge>
        </MyCart>
        </>
    );

}

let hoverColor="#824653";

const MyCart = styled.button`
border: none;
position: relative;
align-items: center;
justify-content: center;
outline: none;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
background-color: rgba(56, 56, 56, 0.001);
`;

const MySvg= styled.svg`
width:"2.5rem"; 
height:"2.5rem";

-webkit-transition:all 500ms ease;
-o-transition:all 500ms ease;
transition:all 500ms ease;

&:hover{
    fill:${hoverColor};
}
`;

const MyCartBadge = styled.span`
position: absolute;
top: -5px;
right: -10px;
width: 25px;
height: 25px;
background-color: #A25768;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
border-radius: 50%;

`;

