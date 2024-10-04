import { Link } from "react-router-dom";
import { styled } from "styled-components";

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 100%;
    padding: 1em;
`

const MinhaConta = () => {
    return (
        <MainContainer>
            <div>
                Minha Conta
            </div>

            <div>
                <Link to={'/minhaConta/ficha'}> Formulario</Link>
            </div>
        </MainContainer>
    )
}

export default MinhaConta;