//hoja con estilos
import "./estilosnavegacion.css"
//paquetes-modulos

//componentes


function Navegacion () {
    return(
        <nav>
            <div id="titulo-home">
                <h2>Rick & Morty</h2>
            </div>
            <div>    
                <a>Characters</a>
                <a>contact</a>
            </div>
        </nav>
    )
}

export default Navegacion;