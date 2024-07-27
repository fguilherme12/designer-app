import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa";


const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #E6BFB8;
    height: 6rem;
    bottom: 0;
  
`

const ListaEstilizada = styled.ul`
    list-style: none;

    li{
        display: inline-block;
        margin-right: 2rem;

        @media(max-width: 1000px) {
            margin-right: 1rem;
        };
    }
`

const RodapeTexto = styled.p`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: white;

    svg {
        padding-right: 0.3rem;
    }
    
    @media(max-width: 1000px) {
        font-size: 0.8rem;
    }
`

const RodapeTextoEndereco = styled.p`
    font-size: 1rem;
    color: white;

    @media(max-width: 1000px) {
        display: none;
    }
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <li>
                    <a href=""></a>
                    <FaTiktok size={'1.5rem'} color="#fff"/>
                </li>
                <li>
                    <a href="https://www.instagram.com/designer.vanessaximenes" target="_blank"> <FaInstagram size={'1.5rem'} color="#fff"/></a>   
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=5561999789469&text&type=phone_number&app_absent=0" target="_blank"> <FaWhatsapp size={'1.5rem'} color="#fff"/></a>  
                </li>
            </ListaEstilizada>
            <RodapeTexto> <FaRegistered /> Desenvolvido por FGVX Coder. </RodapeTexto>
            <RodapeTextoEndereco> Texto a ser decidido. </RodapeTextoEndereco>
        </RodapeEstilizado>
    )
    
}

export default Rodape;