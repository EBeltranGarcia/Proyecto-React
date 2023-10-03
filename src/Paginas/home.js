//hoja con estilos
import './estiloshome.css';
//paquetes-modulos
import {Link} from 'react-router-dom';
//componentes



function Home() {
    
    return(
            <div className='div-container'>
                <h1>Proyect Rick & Morty</h1>
                <h2 className='titulos-responsive'>Welcome to Rick & Morty Proyect!</h2>
                <p className="texto-home">This proyect was made for practicing React and to make a functional website.</p>
                <p className="texto-home">In this website you can know information about the characters of this animated series.</p>
                <p className="texto-home">Also you can filter for different types of properties to find the character that you are looking for. Or send us a message for any concern or suggestion.</p>
                <h3 className='titulos-responsive'>Lets go!</h3>
                <div className='botones-home'>
                    <Link to="/Characters" className='estilos-botones-home'>Characters</Link>
                    <Link to="/Contact" className='estilos-botones-home'>Contact</Link>
                </div>
            </div>
    )
}

export default Home;