import styled from "styled-components"
import TituloEstilizado from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import PostCard from "./PostCard"

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const FotosEstilizada = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos=[], aoSelecionarFoto, aoFavoritarFoto, aoClicar}) =>{
    return(<>
        <Tags aoClicar={aoClicar}/>
        <GaleriaContainer>
            <SecaoFluida>
                <TituloEstilizado>Navegue pela galeria</TituloEstilizado>
                <FotosEstilizada>
                    {fotos.map(foto => <PostCard 
                        key={foto.id} 
                        data={foto}
                        expandida={true}
                        aoFavoritarFoto={aoFavoritarFoto}
                        aoZoomSolicitado={aoSelecionarFoto}/>)}
                </FotosEstilizada>
            </SecaoFluida>
            <Populares/>
        </GaleriaContainer>
    </>)
}

export default Galeria