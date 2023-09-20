//hoja con estilos
import "./estilostarjetas.css"
//paquetes-modulos

//componentes
import Infocards from "./infocard";

function Tarjeta({infoPersonaje}) {
    console.log(infoPersonaje)
    return (
        <div id="contenedor-tarjetas">
            <img src={infoPersonaje.image} alt="Imagen-personaje"/>
            <h3>{infoPersonaje.name}</h3>
            <button>Know More...</button>
            <Infocards estado={infoPersonaje.status} especie={infoPersonaje.species} origen={infoPersonaje.origin.name} genero={infoPersonaje.gender} />
        </div>
    )
}

export default Tarjeta;