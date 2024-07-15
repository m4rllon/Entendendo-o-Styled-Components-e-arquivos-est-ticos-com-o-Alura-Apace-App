import { Children } from "react"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    width: 208px;
    height: 56px;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    background-color: transparent;
    font-family: GandhiSansBold;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

const Botao = ({children}) => {
    return (<BotaoEstilizado>
        {children}
    </BotaoEstilizado>)
}

export default Botao