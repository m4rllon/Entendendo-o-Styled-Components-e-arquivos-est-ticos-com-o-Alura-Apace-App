import ItemNavegacao from "./ItemNavegacao"
import styled from "styled-components"

// ICONES
import IconHomeAtivo from "../../../public/icones/home-ativo.png"
import IconHomeInativo from "../../../public/icones/home-inativo.png"
import IconMaisVistaAtivo from "../../../public/icones/mais-vistas-ativo.png"
import IconMaisVistaInativo from "../../../public/icones/mais-vistas-inativo.png"
import IconMaisCurtidaAtivo from "../../../public/icones/mais-curtidas-ativo.png"
import IconMaisCurtidaInativo from "../../../public/icones/mais-curtidas-inativo.png"
import IconNovasAtivo from "../../../public/icones/novas-ativo.png"
import IconNovasInativo from "../../../public/icones/novas-inativo.png"
import IconSurpreendaAtivo from "../../../public/icones/surpreenda-me-ativo.png"
import IconSurpreendaInativo from "../../../public/icones/surpreenda-me-inativo.png"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    height: 276px;
`

const BarraLateral = () => {
    // O 'aside' é a tag html que se refere ao menu laretal da página:
    return(<aside>
        {/* A tag 'nav' refere-se à menus/lista de navegação */}
        <nav>
            {/* A tag 'ul' refere-se à uma lista de itens não ordenada*/}
            <ListaEstilizada>
                {/* A tag 'li' refere-se a um item da lista */}
                <ItemNavegacao iconeAtivo={IconHomeAtivo} iconeInativo={IconHomeInativo} ativo={true}>
                    Início
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo={IconMaisVistaAtivo} iconeInativo={IconMaisVistaInativo} >
                    Mais vistas
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo={IconMaisCurtidaAtivo} iconeInativo={IconMaisCurtidaInativo} >
                    Mais curtidas
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo={IconNovasAtivo} iconeInativo={IconNovasInativo} >
                    Novas
                </ItemNavegacao>
                <ItemNavegacao iconeAtivo={IconSurpreendaAtivo} iconeInativo={IconSurpreendaInativo}>
                    Surpreenda-me
                </ItemNavegacao>
            </ListaEstilizada>
        </nav>
    </aside>)
}

export default BarraLateral