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
                <li>Character Status {estado}</li>
                <li>
                    <h4>Species</h4>
                    <p>{especie}</p>
                </li>
                <li>
                    <h4>Origin</h4> 
                    <p>{origen}</p>
                </li>
                <li>
                    <h4>Gender</h4> 
                    <p>{genero}</p>
                </li>
            </ul>
        </div>
    )
}

export default Infocards;