import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import Link from './Link';
import Cart from './CartWidget';

export default function Navbar(){    
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

    return(
    <>
        <MyHeader>
            <MyNavbar className="navbar navbar-expand-lg navbar-light" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">
                        <img src={logo} width="120px" height="100px" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <MyUl className="nav justify-content-end">
                                <Link page="Cursos"/>
                                <Link page="Inicial"/>
                                <Link page="Intermedio"/>
                                <Link page="Profesional"/>
                                
                                <Cart></Cart>
                        </MyUl>
                    </div>
                </div>
            </MyNavbar>
        </MyHeader>  
    </>);
}