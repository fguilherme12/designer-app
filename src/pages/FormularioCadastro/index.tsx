import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useAutenticacao } from "../../context/Autenticacao";


const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`

const StyledButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`


const FormularioCadastro = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {registerUser, errorMessageRegister} = useAutenticacao()

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
        <FormContainer>
            <FormTitle> Cadastro</FormTitle>
            <StyledForm onSubmit={onSubmitForm}> 
            <StyledInput
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={event => setName(event.target.value)} 
                required
            />
            <StyledInput
                type="email"
                name="email"
                placeholder="Email"
                onChange={event => setEmail(event.target.value)} 
                required
            />

            <StyledInput
                type="password"
                name="senha"
                placeholder="Senha"
                onChange={event => setPassword(event.target.value)} 
                required
            />
            <StyledButton type="submit">Cadastrar</StyledButton>

            {errorMessageRegister && <h6>{errorMessageRegister} .</h6>}
        </StyledForm>
        </FormContainer>
        
    )
}

export default FormularioCadastro;