//hoja con estilos
import "./estilosnavegacion.css"
//paquetes-modulos
import {Link} from 'react-router-dom';
//componentes


function Navegacion () {
    return(
        <nav>
            <div>
                <Link to="/" className="boton-inicio">Rick & Morty</Link>
            </div>
            <div id="titulos-navegacion">    
                <Link to="/characters" className="paginas-navegacion">Characters</Link>
                <Link to="/contact" className="paginas-navegacion">contact</Link>
            </div>
        </nav>
    )
}

export default Navegacion;