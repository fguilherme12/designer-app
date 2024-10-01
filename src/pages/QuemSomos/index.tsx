import styled from "styled-components";
import Titulo from "../../components/Titulo";
import Foto2 from "/imagens/Foto2.png"
import Card from "../../components/Card";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { PiTreeFill } from "react-icons/pi";
import { FaWhatsapp, FaInstagram, FaHandsHelping} from "react-icons/fa";

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-direction: column;
    background-color: #fff;
    margin: 10rem 0;
    box-sizing: border-box;

    @media(max-width: 1025px) {
        padding: 0.5rem;
        margin: 0.5rem;
    }

`

const PrimeiroContainer = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 5rem;
    padding: 2rem 18rem;

    @media(max-width: 1025px) and (min-width: 849px) {
        padding: 2rem;
    }


    @media(max-width: 850px) {
        padding: 0 1rem;
        gap: 1rem;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`

const ContainerTextos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: left;

    h1 {
        text-align: left;
        margin-top: 2rem;

        @media(max-width: 850px) {
            text-align: center;
        }
    }
`

const Paragrafo = styled.p`
    font-size: 1.1rem;
    text-align: left;

    @media(max-width: 850px) {
        font-size: 0.8rem;
        text-align: center;
    }
`


const Imagem = styled.img`
    height: 30rem;
    border-radius: 30%;

    @media(max-width: 850px) {
        height: 15rem;
        padding-top: 1rem;
        border-radius: 35%;
    }
    
`

const SegundoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF;

    p {
        text-align: center;
    }

    
`

const ContainerCard = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem 5rem;
    gap: 2rem;

    @media(max-width: 850px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const TerceiroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;

`

const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 3rem;

    a {
        list-style: none;
    }
`

function QuemSomos() { 
    return (
        <MainContainer> 
            <PrimeiroContainer>
                <Imagem src={Foto2} />
                <ContainerTextos>
                    <Titulo> Minha História </Titulo>
                    <Paragrafo> 
                        Eu sou vanessa ximenes e sou designer de sobrancelhas. <br/>
                        Eu amo o que eu faço e meu estudio fica localizado na samambaia, <br/>
                        Tem mais de um ano que iniciei esse sonho, e que hoje é o meu trabalho. <br/>
                    </Paragrafo>
                </ContainerTextos>      
            </PrimeiroContainer>

            <SegundoContainer>
                <Titulo> Qual minha missão? </Titulo>
                <Paragrafo> 
                    Nossa missão é criar sobrancelhas perfeitas que valorizem sua identidade, <br/>
                    Cada detalhe é pensado para proporcionar resultados impecáveis.
                </Paragrafo>
                <ContainerCard>
                    <Card titulo={'Compromisso'} texto={'Nosso compromisso é garantir um atendimento acolhedor e resultados que encantam.'} icone={<FaHandsHelping size={'2rem'} />}/>
                    <Card titulo={'Transformação'} texto={'Nosso objetivo é proporcionar uma transformação que realça sua beleza natural, entendendo suas necessidades e desejos. '} icone={<MdFaceRetouchingNatural size={'2rem'} />}/>
                    <Card titulo={'Naturalidade'} texto={'Em nosso estúdio, combinamos técnicas avançadas com um cuidado minucioso para oferecer procedimentos estéticos que destacam a naturalidade.'} icone={<PiTreeFill size={'2rem'} />}/>
                </ContainerCard>
            </SegundoContainer>

            <TerceiroContainer>
                    <Titulo> E você vai perder a chance de ficar mais linda? </Titulo>
                    <Paragrafo> Agende seu horário, pelo instagram ou Whatsapp </Paragrafo>
                    <ContainerLogo>
                        <a href="https://api.whatsapp.com/send/?phone=5561999789469&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsapp color="green" size={'3rem'} /> </a>
                        <a href="https://www.instagram.com/designer.vanessaximenes" target="_blank"><FaInstagram color="#d843b8" size={'3rem'}/> </a>
                    </ContainerLogo>
            </TerceiroContainer>


         </MainContainer>
    )
}

export default QuemSomos;