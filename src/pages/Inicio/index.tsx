import styled from "styled-components";
import Imagem from "../../components/ImagemInicio";
import Banner from "../../components/Banner/index";
import Titulo from "../../components/Titulo";
import fotos from "../../data/imagensInicio.json";

const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-height: 55rem;
    background-color: #fff;
    width: 100%;
    margin: 5rem 0rem;
    flex-grow: 1;

    @media(max-width:750px) {
        
    }
`

function Inicio() {
    return (
        <>
            <Banner/>
            <Titulo> Conheça Nossos procedimentos </Titulo>
            <MainContainer>
                {fotos.map((foto) => <Imagem key={foto.id} path={foto.path} to={foto.to} titulo={foto.titulo} alt={foto.alt}/>)}
            </MainContainer>
        </>
    )
}

export default Inicio