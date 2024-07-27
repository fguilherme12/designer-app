import styled from "styled-components";
import video from "../../data/videosDuvidas.json";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 5em;
`
const TituloPrincipal = styled.h1`
    color: pink;
    align-items: center;
    font-size: 5em;
    margin-top: 5px;
`

const Titulo = styled.h1`
    display: flex;
    align-items: center;
    gap: 10px;
    color: pink;
    font-size: 3em;
`

const Paragrafo = styled.p`
    font-size: 2em;
    text-align: center;
`

function Duvidas() { 
    return (
        <MainContainer>
            <TituloPrincipal> Principais Duvidas </TituloPrincipal>
            {video.map((video) => 
                <section key={video.id}>
                    <Titulo> <BsFillQuestionSquareFill /> {video.titulo} </Titulo>
                    <Paragrafo>{video.descricao}</Paragrafo>
                    <video  src={video.path} controls height={'800px'} width={'100%'}/>
                </section>
            )}
        </MainContainer>
    )
}

export default Duvidas;