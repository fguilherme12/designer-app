import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useAutenticacao } from "../../context/Autenticacao";


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
const FormularioCadastro = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {registerUser} = useAutenticacao()

    const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const user = {
            name,
            email,
            password
        }
        
        registerUser(user)
    }

    return (
        <MainContainer>
            <FormularioEstilizado onSubmit={onSubmitForm}> 
            <div>
                <label>Nome</label>
                <input type="text" placeholder="Insira seu nome aqui" onChange={event => setName(event.target.value)} required></input>
            </div>

            <div>
                <label>Email</label>
                <input type="email" placeholder="Insira seu email aqui" onChange={event => setEmail(event.target.value)} required></input>
            </div>

            <div>
                <label>Senha</label>
                <input type="password" placeholder="Insira sua senha aqui" onChange={event => setPassword(event.target.value)} required></input>
            </div>
            <button type="submit">Cadastrar</button>
        </FormularioEstilizado>
        </MainContainer>
        
    )
}

export default FormularioCadastro;