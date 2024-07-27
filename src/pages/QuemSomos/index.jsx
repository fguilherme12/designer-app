import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2em 10em;
`

const Container = styled.div`
    height: 40em;
`

const Imagem = styled.img`
    right: 15em;
    top: 12em;
    position: absolute;
`

const ImagemSecundaria = styled.img`
    left: 15em;
    top: 48em;
    position: absolute;
    border-radius: 10px;
    width: 35em;
`

const Titulo = styled.h1`
    text-align: center;
    color: pink;
    font-size: 5em;
    margin-top: 1em;
`
const Paragrafo = styled.p`
    font-size: 2em;
    text-align: center;
`

function QuemSomos() { 
    return (
        <MainContainer> 
            <Container>
                <Titulo> Minha História </Titulo>
                <Paragrafo> Eu sou vanessa ximenes e sou designer de sobrancelhas. <br/>
                    Eu amo o que eu faço e meu estudio fica localizado na samambaia, <br/>
                    Tem mais de um ano que iniciei esse sonho, e que hoje é o meu trabalho. <br/>
                </Paragrafo>
                <Imagem src="imagens/Foto.png" />
            </Container>

            <Container>
                <Titulo> Qual minha missão? </Titulo>
                <Paragrafo> Eu ajudo a trazer a naturalidade nos procedimentos. <br/>
                Já transformei mais de duzentos olhares e não quero parar por aqui. <br/>
                </Paragrafo>
                <ImagemSecundaria src="imagens/Foto2.png" />
            </Container>

            <Container>
                <Titulo> E você vai perder a chance de ficar mais linda? </Titulo>
                <Paragrafo> Agende seu horário, pelo instagram ou Whatsapp </Paragrafo>
            </Container>


         </MainContainer>
    )
}

export default QuemSomos;