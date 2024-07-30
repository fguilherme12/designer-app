import styled from 'styled-components';
import ContainerImagem from '../../../components/ContainerImagem'
import fotos from '../../../data/brow.json';
import Titulo from '../../../components/Titulo';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    margin: 2em 20em;
    gap: 30px;
    flex-wrap: wrap;

    @media(max-width: 1100px) {
        margin: 1em 0;
    }
`

function Brow() {

    return (
        <>
            <Titulo>Brow Lamination</Titulo>
            <MainContainer>
                {fotos.map((foto) => <ContainerImagem key={foto.id} alt={foto.alt} id={foto.id} path={foto.path} titulo={foto.titulo}/> )}
            </MainContainer>
        </>
    )
}

export default Brow;