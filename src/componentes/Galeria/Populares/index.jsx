import TituloEstilizado from "../../Titulo"
import fotos from "../../../mocks/populares.json"
import styled from "styled-components"
import Botao from "./Botao"

const ContainerPopularesEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`
const ContainerImgEstilizado = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    img{
        width: 212px;
        height: 158px;
        border-radius: 24px;
    }
`

const Populares = () => {
    return(<ContainerPopularesEstilizado>
        <TituloEstilizado>Populares</TituloEstilizado>
        <ContainerImgEstilizado>
            {fotos.map(foto => <img key={foto.id} src={foto.foto} alt="Foto populares"/>)}
        </ContainerImgEstilizado>
        <Botao>Ver mais</Botao>
    </ContainerPopularesEstilizado>)
}

export default Populares