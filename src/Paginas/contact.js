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
                <form>
                    <h3>Contact</h3>
                    <h3>Leave us your information so we can contact you</h3>
                    <div id="contenedor-nombreyemail">
                        <div>
                            <label for="nombre">Name</label>
                            <br/>
                            <input type="text" id="nombre"/>
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <br/>
                            <input type="email" name="emailEmpresa" id="email" placeholder="example@gmail.com" required/>
                        </div>
                    </div>
                    <div>
                        <label for="texto-informacion">Messege</label>
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