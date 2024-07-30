import styled from "styled-components";
import Imagem from "./Imagem";
import Banner from "../../components/Banner/index";
import Titulo from "../../components/Titulo";

const fotos = [
    {
        id:1,
        path:'imagens/sobranInicio.jpeg',
        titulo: 'Sobrancelhas',
        to: '/sobrancelhas',
        alt: 'Imagem procedimento Sobrancelhas'
    },

    {
        id:2,
        path:'imagens/browInicio.jpg',
        titulo: 'Brow Lamination',
        to: '/brow',
        alt: 'Teste'
    },

    {
        id:3,
        path:'imagens/lashInicio.jpeg',
        titulo: 'Lash Lifting',
        to: '/lash',
        alt: 'Teste,'
    }
]

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
                {fotos.map((foto) => <Imagem key={foto.id} imagem={foto.path} to={foto.to} titulo={foto.titulo} alt={foto.alt}/>)}
            </MainContainer>
        </>
    )
}

export default Inicio