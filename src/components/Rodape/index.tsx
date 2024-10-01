import styled from "styled-components";
import { FaWhatsapp, FaCopyright , FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "/imagens/logo.png"
import { Link } from "react-router-dom";


const Main = styled.main`
    background-color: #E6BFB8;
    width: 100%;
    bottom: 0;  
    padding: 2rem 4rem;
    box-sizing: border-box;

    @media(max-width: 1000px) {
        padding: 0.5rem;
    }
`

const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 2rem;

    @media(max-width: 1000px) {
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
    }
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    margin-bottom: 5rem;

    @media(max-width: 1000px) {
        align-items: center;
        margin-bottom: 2rem;
    }
`

const Titulo = styled.p`
    margin-top: -1rem;
    padding-left: 1rem;
    color: #fff;
`

const Logo = styled.img`
    width: 10rem;
    height: 8rem;
    object-fit: contain;

    @media(max-width: 1000px) {
        width: 9rem;
    }
`

const ListaEstilizada = styled.ul`
    display: flex;
    list-style: none;
    padding: 0.5rem;
    margin-top: -0.5rem;
`

const ItensLista = styled.li`
    display: inline-block;
    margin-right: 2rem;
    border-radius: 50%;
    background-color: #e7b2a9;
    padding: 1rem;
    text-align: center;
    
    @media(max-width: 1000px) {
        margin-right: 1rem;
    };
`

const SegundoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1rem;

    @media(max-width: 1000px) {
        align-items: center;
    }

    h4 {
        color: #fff;
    }
`

const LinkStyle = styled(Link)`
    font-size: 0.8rem;
    color: white;
`

const RodapeTexto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    color: white;

    svg {
        padding-right: 0.3rem;
    }
    
    @media(max-width: 1000px) {
        font-size: 0.8rem;
        position: relative;
        padding: 0 0 2.5rem 0;
        bottom: 0;
    }
`

const TerceiroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h4 {
        color: white;
        padding: 0;
        margin: 3rem 0 0 0;
    }

    p {
        color: white;
        margin: 0 0 0.8rem 0 ;
        font-size: 0.9rem;
    }
`

function Rodape() {
    return (
       <Main>
            <RodapeEstilizado>
                <Container>
                    <Logo src={logo} />
                    <Titulo>Acompanhe nossas redes sociais ♥ </Titulo>
                    <ListaEstilizada>
                        <ItensLista>
                            <a href=""></a>
                            <FaTiktok size={'1.5rem'} color="#fff"/>
                        </ItensLista>
                        <ItensLista>
                            <a href="https://www.instagram.com/designer.vanessaximenes" target="_blank"> <FaInstagram size={'1.5rem'} color="#fff"/></a>   
                        </ItensLista>
                        <ItensLista>
                            <a href="https://api.whatsapp.com/send/?phone=5561999789469&text&type=phone_number&app_absent=0" target="_blank"> <FaWhatsapp size={'1.5rem'} color="#fff"/></a>  
                        </ItensLista>
                    </ListaEstilizada>
                </Container>
            
                <SegundoContainer>
                    <h4>Designer Vanessa Ximenes</h4>
                    <LinkStyle to={'/quem-somos'}>Quem Somos</LinkStyle>
                    <LinkStyle to={'/duvidas'}>Dúvidas </LinkStyle>
                    <LinkStyle to={'sobrancelhas'} >Sobrancelhas</LinkStyle>
                    <LinkStyle to={'lash'} >Lash Lifting</LinkStyle>
                    <LinkStyle to={'brow'} >Brow Lamination </LinkStyle>
                </SegundoContainer>
            
                <TerceiroContainer>
                    <h4> Brasilia,DF </h4>
                    <p> Samambaia Sul, Quadra 316</p>
                    <h4> Contato </h4>
                    <p> designervanessaximenes@gmail.com</p>
                    <h4> Telefone </h4>
                    <p> (61) 99978-9469 </p>
                </TerceiroContainer>
            
            </RodapeEstilizado>

            <RodapeTexto> <FaCopyright /> 2024 - Desenvolvido por FGVX Coder. </RodapeTexto>
       </Main>
       
       
    )
    
}

export default Rodape;