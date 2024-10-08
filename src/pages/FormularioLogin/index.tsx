import { useState } from "react";
import styled from "styled-components";
import { useAutenticacao } from "../../context/Autenticacao";
import { FaUserLock, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 3rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  svg {
    margin-left: 7rem;
  }
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

const TextoMensagem = styled.h5`
  color: red;
`

const SecondContainer = styled.section`
  display: flex;
  flex-direction: column;

  svg {
    margin-left: 12rem;
  }

  h5 {
    padding-bottom: 1rem;
  }
`

const FormularioLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn, errorMessageLogin} = useAutenticacao();
    const navigate = useNavigate();
    
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
            <FaUserLock size={'2rem'}/>
            <Title> Já possui uma conta ? </Title>
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
                {errorMessageLogin && <TextoMensagem>{errorMessageLogin}</TextoMensagem>}
            </StyledForm>

            <SecondContainer>
              <FaUserPlus size={'2rem'} />
              <Title>Cliente Nova?</Title>
              <h5>Clique no botão abaixo, informe seus dados e crie já sua conta.</h5>
              <StyledButton onClick={() => navigate('/cadastro')}>Cadastre-se</StyledButton>
            </SecondContainer>
        </FormContainer>
        

    )
}

export default FormularioLogin;