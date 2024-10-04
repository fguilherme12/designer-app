import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import LinkEstilizado from "../LinkEstilizado";
import { useAutenticacao } from "../../context/Autenticacao";


const AreaLogin = () => {

    const token = localStorage.getItem('token')
    const userName = localStorage.getItem('name')
    const {userLogged, signOut} = useAutenticacao();

    return (
        !token ? 
                    
            <LinkEstilizado to={'/login'}><FaRegUserCircle  color={'white'} size={'20px'} cursor={'pointer'} />Faça Login ou Cadastre-se </LinkEstilizado> : 
        
            <div>
            <LinkEstilizado to={'/cadastro'}><FaRegUserCircle  color={'white'} size={'20px'} cursor={'pointer'} /> Bem vindo {userName}</LinkEstilizado> 
            <button onClick={() => signOut()}>Logout</button>
            <Link to={'/minhaConta'}> Minha Conta </Link>
            </div> 
    )
}

export default AreaLogin;