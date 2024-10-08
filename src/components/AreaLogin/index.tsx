import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAutenticacao } from "../../context/Autenticacao";
import { styled } from "styled-components";
import { useState } from "react";


const MainContainer = styled.div`
    display: flex;
`

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    
    svg{
        padding-right: 0.2rem;
    }

    @media(max-width: 750px) {
        display: block;
    }
`

const StyledButton = styled.button`
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    margin: 0.3rem;
    cursor: pointer;
`

const Dropdown = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 1rem;
    top: 6rem;
    gap: 1rem;
    border: 1px solid #000000;
    background-color:#eb666d;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1rem;
    z-index: 2000;
`

const TextoLogin = styled.p`
    padding: 0;
    margin: 0;

    @media(max-width: 1000px) {
        display: none;
    }

    @media(max-width: 750px) {
        display: block;
    }
`

const AreaLogin = () => {

    const token = localStorage.getItem('token')
    const userName = localStorage.getItem('name')
    const {userLogged, signOut} = useAutenticacao();
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false)

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    };

    return (
        !token ? 
                    
            <StyledLink to={'/login'}><FaRegUserCircle  color={'white'} size={'1rem'} cursor={'pointer'} /><TextoLogin>Faça Login ou Cadastre-se </TextoLogin></StyledLink> : 
        
            <MainContainer>
            <FaRegUserCircle  color={'white'} size={'20px'} cursor={'pointer'} onClick={toggleDropdown} />
            
            {openDropdown && <Dropdown onMouseLeave={toggleDropdown}> Bem vindo {userName}
                            <StyledButton onClick={() => navigate('/minhaConta')}>MinhaConta</StyledButton>
                            <StyledButton onClick={() => signOut()}>Sair</StyledButton>
                        </Dropdown>} 
            </MainContainer> 
    )
}

export default AreaLogin;