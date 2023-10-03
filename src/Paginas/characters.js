//hoja con estilos
import "./estiloscharacters.css";
//paquetes-modulos
import {useState, useEffect, Fragment} from "react";
//componentes
import Navegacion from "../Componentes/navegacion";
import Tarjeta from "../Componentes/tarjetas";
import Filters from "../Componentes/filters";

function Characters() {

    let [listaCompleta, setListaCompleta]=useState([]);

    let [personajes,setPersonajes]=useState([]);

    let [filtrosAplicados, setFiltrosAplicados]=useState([]);

    const listaFiltros = [
        {
        nombre: "Alive",
        filtro: "Character Alive"
    }, {
        nombre: "Dead",
        filtro: "Character Dead"
    }, {
        nombre: "Female",
        filtro: "Female"
    }, {
        nombre: "Male",
        filtro: "Male"
    }, {
        nombre: "unknown",
        filtro: "Origin Unknown"
    }
    ];

    let traerPersonajes= async() => {
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un error: " + err))

        return dato
    };

    let aplicarFiltros=(event) => {

        let nombreCheckbox= event.target.id;

        if (event.target.checked === true) {

            setFiltrosAplicados([...filtrosAplicados, nombreCheckbox])

        }
        else {

            let filtrosRestantes= filtrosAplicados.filter((el)=> el !== nombreCheckbox)
            
            setFiltrosAplicados(filtrosRestantes)
            
            setPersonajes(listaCompleta)
        }
            //console.log(personajes)
    }

        //console.log(event.target.id)
        //console.dir(event.target.checked)

    useEffect(()=> {

        let guardarPersonajes= async() => {
        let info= await traerPersonajes()
        //console.log(info.results)
        let listaPersonajes= info.results;

        setPersonajes(listaPersonajes)

        setListaCompleta(listaPersonajes)
    };

        guardarPersonajes();

    },[])

    useEffect(()=>{

        filtrosAplicados.forEach((filtroNombre)=> {

            let resultado;
    
            if (filtroNombre === "Alive" || filtroNombre === "Dead") {
                resultado= personajes.filter((personaje)=> personaje.status === filtroNombre) 
                //console.log(resultado)
            }
            if (filtroNombre === "Female" || filtroNombre === "Male") {
                resultado= personajes.filter((personaje)=> personaje.gender === filtroNombre) 
                //console.log(resultado)
            }
            if (filtroNombre === "unknown") {
                resultado= personajes.filter((personaje)=> personaje.origin.name === filtroNombre) 
                //console.log(resultado)
            }
            setPersonajes(resultado)
        })
        
    },[filtrosAplicados])

    return(
        <Fragment>
            <Navegacion ubicacionPagina="Characters"/>
            <div>
                <h2 id="titulo-filtros">Filters</h2>
                <form className="d-flex justify-content-around flex-wrap">
                    {listaFiltros.map((item)=>{ return <Filters key={item.nombre} nombreFiltros={item.filtro} idFiltros={item.nombre} handlerChange={aplicarFiltros} />})}
                </form>
            </div>
            <main>
                {personajes.length > 0 ? personajes.map((personaje)=> { return <Tarjeta key={personaje.id} infoPersonaje={personaje}/>}) : 
                <div className="mensaje-alerta">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    <p>Sorry! There are no characters with all those properties.</p>
                </div>
                }
            </main>
        </Fragment>
    )
}

export default Characters;