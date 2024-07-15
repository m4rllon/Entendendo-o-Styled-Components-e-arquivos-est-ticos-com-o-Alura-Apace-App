import styled from "styled-components"

const TagButtonEstilizado = styled.button`
    width: auto;
    height: 49px;
    padding: 10px 8px;
    color: #ffffff;
    font-size: 24px;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const TagButton = ({title, aoClicar}) => {
    return(<TagButtonEstilizado onClick={() => aoClicar(title)}>
        {title}
    </TagButtonEstilizado>)
}

export default TagButton