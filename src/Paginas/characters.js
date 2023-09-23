//hoja con estilos
import "./estiloscharacters.css"
//paquetes-modulos
import {useState, useEffect} from "react";
//componentes
import Navegacion from "../Componentes/navegacion";
import Tarjeta from "../Componentes/tarjetas";
import Filters from "../Componentes/filters";

function Characters() {

    let [personajes,setPersonajes]=useState([]);

    let traerPersonajes= async() => {
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un error: " + err))

        return dato
    };

    useEffect(()=> {

        let guardarPersonajes= async() => {
        let info= await traerPersonajes()
        //console.log(info.results)
        let listaPersonajes= info.results;

        setPersonajes(listaPersonajes)
        
    };

        guardarPersonajes();
    },[])

    return(
            <div>
                <Navegacion/>
                <div>
                    <h2>Informacion pagina personajes</h2>
                    <Filters/>
                </div>
                <section>
                    {personajes.map((personaje)=> { return <Tarjeta key={personaje.id} infoPersonaje={personaje}/>})}
                </section>
            </div>
    )
}

export default Characters;