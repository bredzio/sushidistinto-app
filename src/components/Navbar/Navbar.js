import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import Cart from './CartWidget';


import { Link, NavLink } from "react-router-dom";

const Menu = () =>{
 
    return(
        <MyHeader>
            <MyNavbar className="navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">
                    <Link to="/"> <img src={logo} width="120px" height="100px" alt="logo" /></Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <MyUl className="nav justify-content-end">
                                <li className='nav-item'>
                                    <MyLink to="/cursos">Cursos</MyLink>
                                </li>
                                <li className='nav-item'>
                                    <MyLink to="/servicios">Servicios</MyLink>
                                </li>

                                <li className='nav-item'>
                                    <MyLink to="/nosotros">Nosotros</MyLink>
                                </li>

                                <li className='nav-item'>
                                    <MyLink to="/contacto">Contacto</MyLink>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/checkout"><Cart></Cart></Link>
                                </li>
                        </MyUl>
                    </div>
                </div>
            </MyNavbar>
        </MyHeader> 

    )
}

let textColorMain= "#fff";
let hoverColor="#A25768";    

const MyHeader=styled.header`
    position: fixed;
    height: 120px;
    z-index: 666;
    width: 100%;        
`;

const MyNavbar = styled.nav`
    background-color:rgba(56, 56, 56, 0.7);
    border-bottom: 1px solid white;
    font-weight: bold;
    list-style-type: none;
    line-height: 50px;
`;


const MyUl = styled.ul`
    margin-left: auto;
    flex: 1;
`;

const MyLink = styled(NavLink)`
    color:${textColorMain};
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
    text-decoration: underline;
}

`;

export default Menu;