//hoja con estilos
import "./estiloscontact.css"
//paquetes-modulos

//componentes
import Navegacion from "../Componentes/navegacion";

function Contact() {
    return (
        <div>
            <Navegacion ubicacionPagina="Contact"/>
            <div id="contenedor-formulario">
                <form className="caja-formulario" action="https://formspree.io/f/xknlqpld" method="post">
                    <h3 className="titulos-formulario">Contact</h3>
                    <h3 className="titulos-formulario">Leave us your information so we can contact you</h3>
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
                        <label htmlFor="texto-informacion">Message</label>
                        <br/>
                        <textarea name="texto-informacion" id="texto-informacion"/>
                    </div>
                    <input id= "boton-enviar"type="submit" value="Send"/>
                </form>
            </div>    
        </div>
    )
}

export default Contact;