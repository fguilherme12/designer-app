import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import LinkEstilizado from "../../components/LinkEstilizado";
import { useNavigate } from "react-router-dom";


const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 1em;
`

const FormularioEstilizado = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    border: 1px solid #000000;
    background-color: #fff;
    border-radius: 10px;
    padding: 4rem ;
    font-size: 1rem;
`

const FormularioLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitForm = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const user = {
            email,
            password
        }
        axios.post('http://localhost:3000/login', user)
            .then((resposta) => {
                sessionStorage.setItem('token', resposta.data.access_token)
                alert('Login Efetuado com sucesso')
                setEmail(''),
                setPassword(''),
                navigate('/')
            }).catch((erro) =>
                alert(`Erro:  ${erro.response.data.message}`)
            )
        
    }

    return (
       
        <MainContainer>
            <FormularioEstilizado onSubmit={onSubmitForm}> 
            <div>
                <label>Email</label>
                <input type="email" placeholder="Digite seu Email" onChange={event => setEmail(event.target.value)} required></input>
            </div>

            <div>
                <label>Senha</label>
                <input type="password" placeholder="Insira sua senha" onChange={event => setPassword(event.target.value)} required></input>
            </div>
            <button type="submit">Login</button>
            </FormularioEstilizado>

            <LinkEstilizado to={'/cadastro'}> Cadastro</LinkEstilizado>
            
            
        </MainContainer>
        

    )
}

export default FormularioLogin;