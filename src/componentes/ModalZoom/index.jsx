import styled from "styled-components"
import PostCard from "../Galeria/PostCard"
import IconFechar from "../../../public/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 10vh;
    background: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    width: 1156px;
    form button{
        position: relative;
        top: 20px;
        right: 60px;
        margin-left: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`

const ModalZoom = ({ foto, aoFechar, aoFavoritarFoto }) => {
    return(<>
        {foto && <Overlay>
            <DialogEstilizado open={!!foto} onClose={aoFechar}>
                <PostCard data={foto} expandida={false} aoFavoritarFoto={aoFavoritarFoto}/>
                <form method="dialog">
                    <button formMethod="dialog">
                        <img src={IconFechar} alt="Icone de fechar"/>
                    </button>
                </form>
    </DialogEstilizado>
        </Overlay>}
    </>
    )
}

export default ModalZoom
