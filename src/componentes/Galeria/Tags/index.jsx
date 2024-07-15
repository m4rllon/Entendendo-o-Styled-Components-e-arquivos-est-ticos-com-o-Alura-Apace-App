import styled from "styled-components"
import TagButton from "./TagButton"
import tags from "./tags.json"

const TagsEstilizada = styled.div`
    width: 750px;
    margin: 2.5rem 0;
    display: flex;
    gap: 64px;
    p {
        color: aliceblue;
        font-size: 20px;
    }
`

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const Tags = ({aoClicar}) => {
    return(<TagsEstilizada>
        <p>Busque por tags:</p>
        <TagContainer>
            {tags.map(tag => <TagButton 
                key={tag.id} 
                title={tag.titulo}
                aoClicar={aoClicar}/>)}
        </TagContainer>
    </TagsEstilizada>)
}

export default Tags