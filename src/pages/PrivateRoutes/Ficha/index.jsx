import styled from "styled-components";

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


const Ficha = () => {

  return (
    <FormContainer>
      <FormTitle>Ficha Anamnese</FormTitle>
      <StyledForm>
        <StyledInput
          type="text"
          name="nome"
          placeholder="Nome"
        />
        <StyledInput
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
    </FormContainer>
  );

};

export default Ficha;