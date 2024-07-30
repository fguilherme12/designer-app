import styled from "styled-components";
import Titulo from "../../components/Titulo";

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem 18rem;
    margin-bottom: 10rem;

    @media(max-width: 1000px) {
        padding: 2rem 3rem;
    }
`

const Container = styled.div`
    margin-bottom: 5rem;
`

const Paragrafo = styled.p`
    font-size: 1.3rem;
    text-align: center;

    @media(max-width: 1000px) {
        font-size: 1rem;
    }
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
            </Container>

            <Container>
                    <Titulo> Qual minha missão? </Titulo>
                    <Paragrafo> Eu ajudo a trazer a naturalidade nos procedimentos. <br/>
                    Já transformei mais de duzentos olhares e não quero parar por aqui. <br/>
                    </Paragrafo>
            </Container>

            <Container>
                    <Titulo> E você vai perder a chance de ficar mais linda? </Titulo>
                    <Paragrafo> Agende seu horário, pelo instagram ou Whatsapp </Paragrafo>
            </Container>


         </MainContainer>
    )
}

export default QuemSomos;