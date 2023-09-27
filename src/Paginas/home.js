//hoja con estilos
import './estiloshome.css';
//paquetes-modulos
import {Link} from 'react-router-dom';
//componentes



function Home() {
    
    return(
            <div className='div-container'>
                <h1>Proyect Rick & Morty</h1>
                <h2>Helcome to Rick & Morty Proyect!</h2>
                <p className="texto-home">This proyect was made for practising React and to made a functional websit.</p>
                <p className="texto-home">In this website you can know information of the characters of this animated series.</p>
                <p className="texto-home">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
                <h3>Lets go!</h3>
                <div className='botones-home'>
                    <Link to="/characters" className='estilos-botones-home'>Characters</Link>
                    <Link to="/contact" className='estilos-botones-home'>Contact</Link>
                </div>
            </div>
    )
}

export default Home;