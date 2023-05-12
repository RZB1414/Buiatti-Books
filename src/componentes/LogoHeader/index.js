import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoHeaderContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function LogoHeader() {
    return (
        <LogoHeaderContainer>
            <LogoImg src={logo}
                alt='logo'
                className='logo-img'
            ></LogoImg>
            <p><strong>Buiatti</strong>Books</p>
        </LogoHeaderContainer>
    );
}

export default LogoHeader;