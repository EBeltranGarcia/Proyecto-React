//hoja con estilos
import "./estilosnavegacion.css"
//paquetes-modulos
import {Link} from 'react-router-dom';
//componentes


function Navegacion ({ubicacionPagina}) {
    return(
        <nav>
            <div>
                <Link to="/" className="boton-inicio">Rick & Morty</Link>
            </div>
            <div id="titulos-navegacion">    
                <Link to="/Characters" id="estilos-characters" className={ubicacionPagina === "Characters" ? "fondo-activado" : ""}>Characters</Link>
                <Link to="/Contact" id="estilos-contact" className={ubicacionPagina === "Contact" ? "fondo-activado" : ""}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navegacion;