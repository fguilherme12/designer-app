import { useState } from "react";
import styled from "styled-components";
import LinkEstilizado from "../../components/LinkEstilizado";
import { useAutenticacao } from "../../context/Autenticacao";


const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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

const FormularioLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn, errorMessageLogin} = useAutenticacao();
    
    const onSubmitForm = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const user = {
            email,
            password,
        }

        signIn(user)
    }

    return (
       
        <FormContainer>
            <StyledForm onSubmit={onSubmitForm}> 
            <FormTitle> Já possui uma conta ? </FormTitle>
                <h6>Informe seus dados para acessa-la</h6>
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="Insira seu Email"
                    onChange={event => setEmail(event.target.value)} 
                    required
                />
                <StyledInput
                    type="password"
                    name="senha"
                    placeholder="Insira sua Senha"
                    onChange={event => setPassword(event.target.value)} 
                    required
                />

                <StyledButton type="submit">Login</StyledButton>
            </StyledForm>

            {errorMessageLogin && <h6>{errorMessageLogin} .</h6>}

            <LinkEstilizado to={'/cadastro'}> Cadastro</LinkEstilizado>    
        </FormContainer>
        

    )
}

export default FormularioLogin;