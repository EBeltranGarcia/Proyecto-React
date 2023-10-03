//hoja con estilos
import "./estilostarjetas.css";
//paquetes-modulos
import { useState } from "react";
//componentes
import Infocards from "./infocard";

function Tarjeta({infoPersonaje}) {
    //console.log(infoPersonaje)
    
    const [mostrar, setMostrar]=useState(false);

    const mostrarLista=() => {
        setMostrar(true)
    }
    
    return (
        <div className={mostrar === true? "contenedor-tarjetas2":"contenedor-tarjetas"}>
            <div>
                <img className={mostrar === true? "imagen-abierta":"imagen-original"} src={infoPersonaje.image} alt="Imagen-personaje"/>
                <h3 className={mostrar === true? "texto-abierto":"texto-cerrado"}>{infoPersonaje.name}</h3>
                <button className={mostrar === true? "boton-oculto":"boton-visible"} onClick={mostrarLista}>Know More...</button>
            </div>
            {mostrar === true? <Infocards estado={infoPersonaje.status} especie={infoPersonaje.species} origen={infoPersonaje.origin.name} genero={infoPersonaje.gender} setMostrar={setMostrar}/>:""}
        </div>
    )
}

export default Tarjeta;