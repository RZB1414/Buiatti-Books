import styled from "styled-components";

const OpcoesHeaderContainer = styled.ul`
    display: flex;
`

const OpcaoHeaderContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
    return (
        <OpcoesHeaderContainer>
            {textoOpcoes.map((texto) => (
                <OpcaoHeaderContainer>
                    <p>{texto}</p>
                </OpcaoHeaderContainer>
            ))}
        </OpcoesHeaderContainer>
    )
}

export default OpcoesHeader;