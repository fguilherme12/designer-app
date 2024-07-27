import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoEnter } from "react-icons/io5";

const Figure = styled.figure`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

const Figcaption = styled.figcaption`
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #993F48;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 20px;
        font-size: 20px;
`

const ImagemEstilizada = styled.img`
    width: 350px;
    border-radius: 20px 20px 0 0;
    height: 500px;
`

// eslint-disable-next-line react/prop-types
function Imagem({imagem, titulo, to}) {
    return (
        <Figure>
            <ImagemEstilizada src={imagem} />
            <Figcaption>
                {titulo}
                <Link to={to}><IoEnter size={'40px'} color="white" /></Link>
            </Figcaption>
        </Figure>
    )
}

export default Imagem