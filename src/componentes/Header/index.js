import LogoHeader from '../LogoHeader';
import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <LogoHeader />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;