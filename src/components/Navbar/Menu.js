import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home"
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios/Servicios";
import Contacto from "../pages/Contacto";
import Checkout from "../pages/Checkout";
import Cursos from "../pages/Cursos/Cursos";

import Menu from "./Navbar";

const ConceptosBasicos = () =>{
    return(
        <div>
           <Router>
                <Menu/>
                <Routes>
                    <Route exact path="/nosotros"  element={<Nosotros/>}/>
                    <Route exact path="/servicios" element={<Servicios/>}/>
                    <Route exact path="/contacto" element={<Contacto/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                    <Route exact path="/cursos" element={<Cursos/>}/>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
                
           </Router>
        </div>
    )
}


export default ConceptosBasicos;