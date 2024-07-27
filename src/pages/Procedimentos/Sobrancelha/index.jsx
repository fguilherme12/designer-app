import styled from 'styled-components';
import ContainerImagem from '../../../components/ContainerImagem'
import fotosSobrancelha from '../../../data/sobrancelhas.json';

const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    margin: 2em 20em;
    gap: 30px;
    flex-wrap: wrap;
`

const Titulo = styled.h1`
    text-align: center;
    color: pink;
    font-size: 70px;
    margin: 100px;
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