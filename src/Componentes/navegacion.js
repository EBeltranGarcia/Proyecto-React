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
                <div className="menu">
                    <ul>
                        <li>
                            <Link id="estilos-characters" to="/Characters" className={ubicacionPagina === "Characters" ? "fondo-activado" : ""}>Characters</Link>
                        </li>
                        <li>
                            <Link id="estilos-contact" to="/Contact" className={ubicacionPagina === "Contact" ? "fondo-activado" : ""}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navegacion;