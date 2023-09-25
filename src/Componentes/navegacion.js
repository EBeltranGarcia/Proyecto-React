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
            <div id="titulos-navegacion">    
                <p className="paginas-navegacion">Characters</p>
                <p className="paginas-navegacion">contact</p>
            </div>
        </nav>
    )
}

export default Navegacion;