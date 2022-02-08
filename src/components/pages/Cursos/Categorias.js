import React from 'react';
import styled from 'styled-components';


import { NavLink } from "react-router-dom";

const Categorias = () =>{
 
    return(
        <>
            <MyNavbar className="navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">       
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <MyUl className="nav text-center">
                                <li className='nav-item text-mutted'>
                                    <MyLink to="/tienda/cursos">Cursos</MyLink>
                                </li>
                                <li className='nav-item'>
                                    <MyLink to="/tienda/masterclass">Masterclass</MyLink>
                                </li>

                                <li className='nav-item'>
                                    <MyLink to="/tienda/promociones">Promociones</MyLink>
                                </li>

                                <li className='nav-item'>
                                    <MyLink to="/tienda">Todos</MyLink>
                                </li>
                        </MyUl>
                    </div>
                </div>
            </MyNavbar>
        </> 

    )
}

let hoverColor="#A25768";    


const MyNavbar = styled.nav`
    font-weight: bold;
    text-align:center;
    justify-content:center;
`;


const MyUl = styled.ul`
    margin-left: auto;
    flex: 1;
`;

const MyLink = styled(NavLink)`
    color:grey;
    line-height:30px;
    font-size:20px;
    font-weight:bold;
    -webkit-transition:all 500ms ease;
    -o-transition:all 500ms ease;
    transition:all 500ms ease;
    text-decoration: none;
    margin-left: 1rem;

&:hover{
    color:${hoverColor};
    text-decoration: none;
}

`;

export default Categorias;