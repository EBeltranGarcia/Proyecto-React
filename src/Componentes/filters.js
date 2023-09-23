//hoja con estilos
import "./estilosfilters.css"
//paquetes-modulos

//componentes


function Filters({nombreFiltros}) {
    return(
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{nombreFiltros}</label>
        </div>
    )
}

export default Filters;