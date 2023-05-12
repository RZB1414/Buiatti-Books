import './estilo.css'
import logo from '../../imagens/logo.svg';

function LogoHeader(){
    return (
    <div className='logo'>
          <img src={logo} 
          alt='logo' 
          className='logo-img'
          ></img>
          <p><strong>Buiatti</strong>Books</p>
        </div>
    );
}

export default LogoHeader;