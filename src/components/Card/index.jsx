import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e5e7ebce;
    border-radius: 6%;
    padding: 2rem;
    margin-top: 2rem;
    position: relative;
    width: 18rem;
`

const Icone = styled.div`
    position: absolute;
    border-radius: 50%;
    top: -1.8rem;
    padding: 0.7rem;
    background-color: #e497c6;
`

const Paragrafo = styled.p`
   font-size: 1.rem;

   @media(max-width: 850px) {
        font-size: 0.8rem;
    }
`

const Titulo = styled.h3`
    color: #e497c6;
`

// eslint-disable-next-line react/prop-types
function Card({icone, titulo, texto}) {
    return (
        <Container>
            <Icone>{icone}</Icone>
            <Titulo>{titulo}</Titulo>
            <Paragrafo>{texto}</Paragrafo>
        </Container>
    )
}

export default Card;