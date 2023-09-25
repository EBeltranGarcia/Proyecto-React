//hoja con estilos
import "./estilosfilters.css"
//paquetes-modulos

//componentes


function Filters({nombreFiltros, idFiltros, handlerChange}) {
    return(
        <div className="form-check form-switch contenedor-filtros">
            <input className="form-check-input" type="checkbox" role="switch" id={idFiltros} onChange={handlerChange}/>
            <label className="form-check-label" htmlFor={idFiltros}>{nombreFiltros}</label>
        </div>
    )
}

export default Filters;