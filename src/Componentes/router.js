//hoja con estilos

//paquetes-modulos
import {BrowserRouter, Routes, Route } from "react-router-dom";
//componentes
import Home from "../Paginas/home";
import Characters from "../Paginas/characters";
import Contact from "../Paginas/contact";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route  path="/characters" element={<Characters/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;