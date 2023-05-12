import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const IconesHeaderContainer = styled.ul`
  display: flex;
  align-items: center;
`

const IconeHeaderContainer = styled.li`
  margin-right: 40px;
  width: 25px;
  cursor: pointer;
`

const icones = [perfil, sacola]

function IconesHeader(){
    return(
        <IconesHeaderContainer>
          {icones.map((icone) => (
          <IconeHeaderContainer>
            <img src={icone}></img>
            </IconeHeaderContainer>
          ))}
        </IconesHeaderContainer>
    )
}

export default IconesHeader;