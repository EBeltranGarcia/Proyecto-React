//hoja con estilos

//paquetes-modulos

//componentes


function Infocards({estado, especie, origen, genero}) {
    return(
        <div>
            <ul>
                <li>Character Status {estado}</li>
                <li>Species {especie}</li>
                <li>Origin {origen}</li>
                <li>Gender {genero}</li>
            </ul>
        </div>
    )
}

export default Infocards;