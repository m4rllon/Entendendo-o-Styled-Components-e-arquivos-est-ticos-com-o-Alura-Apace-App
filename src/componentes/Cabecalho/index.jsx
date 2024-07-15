import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }`

const Cabecalho = ({aoBuscar}) => {
    return(<HeaderEstilizado>
        <img alt="Logo do Site" src="../../public/imagens/logo.png"/>
        <CampoTexto aoBuscar={aoBuscar}/>
    </HeaderEstilizado>)
}

export default Cabecalho