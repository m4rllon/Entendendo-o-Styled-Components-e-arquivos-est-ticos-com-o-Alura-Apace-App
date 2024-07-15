import styled from "styled-components"

import fotoBanner from "../../assets/banner.png"

const BannerEstilizado = styled.div`
    height: 328px;
    border-radius: 16px;

    background-image: url(${fotoBanner});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1210px;
    
    display: flex;
    align-items: center;
    padding-left: 48px;
    p {
        font-size: 32px;
        color: aliceblue;
        width: 15rem;
    }
`

const Banner = () => {
    return(<BannerEstilizado>
        <p>
            A galeria mais completa de fotos do espaço!
        </p>
    </BannerEstilizado>)
}

export default Banner