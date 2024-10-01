import styled from "styled-components";
import video from "../../data/videosDuvidas.json";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import Titulo from "../../components/Titulo";

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 1em;
`

const TituloSecundario = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #c5515d;
    font-size: 1.8rem;

    @media(max-width: 1000px) { 
        font-size: 1rem;
    }
`

const Paragrafo = styled.p`
    font-size: 1.2rem;
    text-align: center;

    @media(max-width: 1000px) { 
        font-size: 0.9rem;
    }

`

const Section = styled.section`
    text-align: center;
    margin-bottom: 4rem;
`

const Video = styled.video`
    height:30rem; 
    width:20rem;

    @media(max-width: 1000px) { 
        height:20rem; 
        width:17rem;
    }
`

function Duvidas() { 
    return (
        <MainContainer>
            <Titulo> Principais Duvidas </Titulo>
            {video.map((video) => 
                <Section key={video.id}>
                    <TituloSecundario> <BsFillQuestionSquareFill /> {video.titulo} </TituloSecundario>
                    <Paragrafo>{video.descricao}</Paragrafo>
                    <Video  src={video.path} controls />
                </Section>
            )}
        </MainContainer>
    )
}

export default Duvidas;