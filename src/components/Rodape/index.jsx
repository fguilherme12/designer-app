import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRegistered } from "react-icons/fa";


const RodapeEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 0;
    width: 100%;
    background-color: #E6BFB8;
    height: 130px;
  
`

const ListaEstilizada = styled.ul`
    list-style: none;

    li{
        display: inline-block;
        margin-right: 32px;
    }
`

const RodapeTexto = styled.p`
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;

    svg {
        padding-right: 5px;
    }
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <li>
                    <a href=""></a>
                    <FaTiktok size={'35'} color="#fff"/>
                </li>
                <li>
                    <a href="https://www.instagram.com/designer.vanessaximenes" target="_blank"> <FaInstagram size={'35'} color="#fff"/></a>   
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=5561999789469&text&type=phone_number&app_absent=0" target="_blank"> <FaWhatsapp size={'35'} color="#fff"/></a>  
                </li>
            </ListaEstilizada>
            <RodapeTexto> <FaRegistered /> Desenvolvido por FGVX Coder. </RodapeTexto>
            <RodapeTexto>Texto a ser decidido. </RodapeTexto>
        </RodapeEstilizado>
    )
    
}

export default Rodape;