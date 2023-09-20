//hoja con estilos
import "./estiloscontact.css"
//paquetes-modulos

//componentes
import Navegacion from "../Componentes/navegacion";

function Contacto() {
    return (
        <div>
            <Navegacion />
            <div id= "caja-formulario">
                <form action="" method="post">
                    <h3>Contact</h3>
                    <h3>Leave us your information so we can contact you</h3>
                    <div id="contenedor-nombreyemail">
                        <div>
                            <label htmlFor="nombre">Name</label>
                            <br/>
                            <input type="text" id="nombre"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input type="email" name="emailEmpresa" id="email" placeholder="example@gmail.com" required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="texto-informacion">Messege</label>
                        <br/>
                        <textarea name="texto-informacion" id="texto-informacion"/>
                    </div>
                    <input id= "boton-enviar"type="submit" value="Enviar"/>
                </form>
            </div>    
        </div>
    )
}

export default Contacto;