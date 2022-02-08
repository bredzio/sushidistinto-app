import React from "react";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios/Servicios";
import Contacto from "../pages/Contacto";
import Checkout from "../pages/Checkout";
import Cursos from "../pages/Cursos/Cursos";

import Menu from "./Navbar";
import CursoDetailContainer from "../pages/Cursos/CursoDetailContainer";

const Main = () =>{
    return(
        <div>
           <Router>
                <Menu/>
                <Routes>
                    <Route exact path="/nosotros"  element={<Nosotros/>}/>
                    <Route exact path="/servicios" element={<Servicios/>}/>
                    <Route exact path="/contacto" element={<Contacto/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                    <Route exact path="/tienda" element={<Cursos/>}/>
                    <Route exact path="/" element={<Home/>}/>

                    <Route exact path="/tienda/:cursoId" element={<Cursos/>}/>
                    <Route exact path="/detalle/:itemId" element={<CursoDetailContainer/>}/>
                    
                    
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                
           </Router>
        </div>
    )
}


export default Main;