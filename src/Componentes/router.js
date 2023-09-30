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
                <Route  path="/Characters" element={<Characters/>}/>
                <Route path="Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;