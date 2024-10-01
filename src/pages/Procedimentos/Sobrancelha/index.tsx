import styled from 'styled-components';
import ContainerImagem from '../../../components/ContainerImagem'
import fotosSobrancelha from '../../../data/sobrancelhas.json';
import Titulo from '../../../components/Titulo';

const MainContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    margin: 2em 10em;
    gap: 2rem;
    flex-wrap: wrap;

    @media(max-width: 1100px) {
        margin: 1em 0;
    }
`

function Sobrancelha() {

    return (
        <>
            <Titulo>Sobrancelhas</Titulo>
            <MainContainer>
                {fotosSobrancelha.map((foto) => <ContainerImagem key={foto.id} alt={foto.alt} id={foto.id} path={foto.path} titulo={foto.titulo}/> )}
            </MainContainer>
        </>
    )
}

export default Sobrancelha;