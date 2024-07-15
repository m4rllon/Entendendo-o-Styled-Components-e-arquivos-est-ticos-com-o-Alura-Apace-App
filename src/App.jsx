import {styled} from 'styled-components'
import EstilosGlobais from './componentes/EstilosGlobais'
import Cabecalho from './componentes/Cabecalho'
import BarraLateral from './componentes/BarraLateral'
import Banner from './componentes/Banner'
import Galeria from './componentes/Galeria'
import fotos from "./mocks/fotos.json"
import { useEffect, useState } from 'react'
import ModalZoom from './componentes/ModalZoom'
import tags from "./mocks/tags.json"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 90%;
  min-height: 100vh;
  padding-left: 5%;
  padding-right: 5%;
  `
const AppContaier = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`
const MainContaier = styled.div`
  display: flex;
  gap: 24px;
`
const GaleiraSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [tagFiltrada, setTagFIltrada] = useState(0)
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    (inputText !== '') ? filtrarFotosPelaBusca() : setFotosDaGaleria(fotos)
    // (inputText !== '') ? filtrarFotosPelaBusca() : filtrarFotosDaGaleria()
  },[tagFiltrada, inputText])

  const aoFavoritarFoto = (foto) => {
    if(foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {return{
      ...fotoDaGaleria,
      favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
    }}))
  }

  const aoClicarFiltro = (nomeTag) => {
    const newTag = tags.find(tag => tag.tagName === nomeTag)
    setTagFIltrada(Number(newTag.tagId))
  }

  const filtrarFotosDaGaleria = () => {
    if(tagFiltrada !== 0){
      setFotosDaGaleria(fotos)
      const listaFotosFiltrada = fotos.filter(foto => (foto.tagId === tagFiltrada))
      setFotosDaGaleria(listaFotosFiltrada)
    } else setFotosDaGaleria(fotos)
  }

  const aoBuscar = (input) => {
    setInputText(input)
  }

  const filtrarFotosPelaBusca = () => {
    if(inputText !== ''){
      setFotosDaGaleria(fotos)
      const listaFiltrada = fotos.filter(foto => (foto.titulo.includes(inputText)))
      setFotosDaGaleria(listaFiltrada) 
    } else setFotosDaGaleria(fotos)
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContaier>
        <Cabecalho aoBuscar={aoBuscar}/>
        <MainContaier>
          <BarraLateral/>
          <GaleiraSectionContainer>
            <Banner/>
            <Galeria 
              fotos={fotosDaGaleria} 
              aoFavoritarFoto={aoFavoritarFoto}
              aoSelecionarFoto={ foto => setFotoSelecionada(foto)}
              aoClicar={aoClicarFiltro}/>
          </GaleiraSectionContainer>
        </MainContaier>
      </AppContaier>
      <ModalZoom 
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoFavoritarFoto={aoFavoritarFoto}/>
    </FundoGradiente>
  )
}

export default App
