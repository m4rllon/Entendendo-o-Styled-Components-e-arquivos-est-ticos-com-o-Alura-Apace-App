import { useState } from "react"
import styled from "styled-components"

const CampoTextoEstilizado = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: .4rem;  
    border-radius: 8px;
    border: 2px solid #7B78E5;
    width: 30vw;
    height: 3.75rem;
    img {
        width: 32px;
        height: 32px;
    };
    input {
        width: 24rem;
        height: 2rem;
        background-color: transparent;
        outline: 0;
        border: 0;
        font-size: 1.3rem;
        color: #7B78E5;
    }
    `

const CampoTexto = ({aoBuscar}) => {    
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value);
        aoBuscar(input)
    }

    return (<CampoTextoEstilizado>
        <img alt="Icone de busca" src="../../public/icones/search.png"/>
        <input type="text" value={input} onChange={handleChange} placeholder="O que você procura?"/>
    </CampoTextoEstilizado>)
}

export default CampoTexto