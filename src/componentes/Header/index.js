import './estilo.css'

import LogoHeader from '../LogoHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';

function Header() {
    return (
        <header className='App-header'>
            <LogoHeader />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header;