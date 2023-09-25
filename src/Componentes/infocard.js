//hoja con estilos
import "./estilosinfocard.css"
//paquetes-modulos

//componentes


function Infocards({estado, especie, origen, genero, setMostrar}) {
    
    return(
        <div id="contenedor-infocards">
            <div>
                <button id="boton-infocard" onClick={()=> setMostrar(false)}>x</button>
            </div>
            <ul>
                <li id="contenedor-status">Character Status {estado}</li>
                <li className="contenedor-listas">
                    <h4 className="titulos-h4">Species</h4>
                    <p className="informacion-estados">{especie}</p>
                </li>
                <li className="contenedor-listas">
                    <h4 className="titulos-h4">Origin</h4> 
                    <p className="informacion-estados">{origen}</p>
                </li>
                <li className="contenedor-listas">
                    <h4 className="titulos-h4">Gender</h4> 
                    <p className="informacion-estados">{genero}</p>
                </li>
            </ul>
        </div>
    )
}

export default Infocards;