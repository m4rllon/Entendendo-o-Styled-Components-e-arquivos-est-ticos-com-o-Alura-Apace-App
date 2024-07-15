import styled from "styled-components"
import favorito from "../../../../public/icones/favorito.png"
import favoritoSelect from "../../../../public/icones/favorito-ativo.png"
import expandirIcon from "../../../../public/icones/expandir.png"

const FigureEstilizada = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: #001634;
    width: ${props => props.$expandida ? '448px' : '1000px'};
    height: ${props => props.$expandida ? '336px' : '740px'};
    /* height: 336px; */
    border-radius: 24px;
    padding: 0;
    margin: 0;
    img{
        width: ${props => props.$expandida ? '448px' : '1000px'};
        height: ${props => props.$expandida ? '256px' : '660px'};
        border-radius: 24px 24px 0 0;
        display: flex;
        align-items: center;
    }
`
const LegendaEstilizada = styled.figcaption`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 418px;
    
`
const DescricaoContainer = styled.div`
    height: 48px;
    h3 {
        font-family: GandhiSansBold;
        font-size: 20px;
        margin: 0;
    }
    p {
        margin: 0;
    }
`
const IconesContainer = styled.div`
    display: flex;
    gap: 16px;
    img {
        width: 20px;
        height: 20px;
        border: 0;
        border-radius: 0;
    }
`
const BotaoEstilizado = styled.button`
    background-color: transparent;
    border: 0;
    width: 24px;
    height: 24px;
    cursor: pointer;
`

const PostCard = ({data, expandida=false, aoZoomSolicitado, aoFavoritarFoto}) => {
    const iconFav = data.favorita ? favoritoSelect : favorito

    return(<FigureEstilizada $expandida={expandida}>
        <img src={data.path}/>
        <LegendaEstilizada>
                <DescricaoContainer>
                    <h3>{data.titulo}</h3>
                    <p>{data.fonte}</p>
                </DescricaoContainer>
                <IconesContainer>
                    <BotaoEstilizado onClick={() => aoFavoritarFoto(data)}>
                        <img src={iconFav}/>
                    </BotaoEstilizado>
                    {expandida && <BotaoEstilizado 
                        aria-hidden={expandida}
                        onClick={() => aoZoomSolicitado(data)}>
                            <img src={expandirIcon}/>
                    </BotaoEstilizado>}
                </IconesContainer>
        </LegendaEstilizada>
    </FigureEstilizada>)
}

export default PostCard