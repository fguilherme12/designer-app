import styled from "styled-components";
import logo from "/imagens/logo.png"
import LinkEstilizado from "../LinkEstilizado";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMenu, IoCloseCircle } from "react-icons/io5";

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 15px;
    background-color: #993f48;
    height: 70px;
`

const Logo = styled.img`
    width: 12rem;
    cursor: pointer;

    @media(max-width: 1000px) {
        width: 9rem;
    }
`

const NavEstilizada = styled.nav`
    display: flex;
    padding: 1em 2em;
    font-size: 1rem;
    gap: 40px;
    border-color: #e7a886;
    a {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        white-space: nowrap;
    }

    @media(max-width: 1000px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 1.5rem;
        padding: 0.8rem;
        font-size: 0.8rem;
        margin: 0;
        background-color: #720913a0;;
        color: white;
        position: absolute;
        z-index: 1000;
        top: 1.6rem;
        right: 4rem;
        border-radius: 8px;
        overflow: hidden;
    };
    
`

const Dropdown = styled.ul`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: absolute;
    gap: 2rem;
    border: 1px solid #000000;
    background-color:#eb666d;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1rem;
    z-index: 20;

    @media(max-width: 1000px) {
        align-items: center;
        font-size: 0.8rem;
        padding: 0.7rem;
        gap: 1rem;
        position: relative;
    }

`

const Hamburger = styled.div`

    display: none;
  
    @media(max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 24px;
        position: relative;
        z-index: 20;
    }
`;

const BotaoFechar = styled(IoCloseCircle)`
    position: absolute;
    top: 0.2rem;
    right: 0.01rem;
`



function Cabecalho() {

    const [openDropdown, setOpenDropdown] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    };

    return (    
        <HeaderEstilizado>
            <Link to={'/'}> <Logo src={logo} alt="Logo"/> </Link>
           
            <Hamburger >
                <IoMenu size={'80px'} onClick={toggleMenu} isOpen={isOpen} cursor={'pointer'} color='white'/>
             </Hamburger>
                <NavEstilizada isOpen={isOpen}>
                    <LinkEstilizado to={'/'}> Inicio </LinkEstilizado>
                    <LinkEstilizado to={'/quem-somos'}>Quem Somos</LinkEstilizado>
                    <LinkEstilizado to={'/duvidas'}>Dúvidas </LinkEstilizado>
                    <a onClick={toggleDropdown}> Procedimentos <TiArrowSortedDown />
                        {openDropdown && <Dropdown onMouseLeave={toggleDropdown}>
                            <LinkEstilizado to={'sobrancelhas'}>Sobrancelhas</LinkEstilizado>
                            <LinkEstilizado to={'lash'}>Lash Lifting</LinkEstilizado>
                            <LinkEstilizado to={'brow'}>Brow Lamination </LinkEstilizado>
                        </Dropdown>}   
                    </a>
                    {isOpen && <BotaoFechar size={'25px'} onClick={toggleMenu} />}
                </NavEstilizada>

        </HeaderEstilizado>
    )
}

export default Cabecalho;