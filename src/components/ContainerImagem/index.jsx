/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaExpandAlt} from "react-icons/fa";
import { useCurtidasContext } from "../../context/FotosCurtidas";
import { useFotoExpandida } from "../../context/FotoExpandida";


const ImagemEstilizada = styled.img`
    width: 17rem;
    border-radius: 20px 20px 0 0;
    height: 21rem;
    object-fit: cover;

    @media(max-width: 1000px) {
        width: 13rem;
        height: 18rem;
    }
`


const FigCaption = styled.figcaption`
    display: flex;
    gap: 0.7rem;
    max-width: 17rem;
    justify-content: space-between;
    background-color: #d15b67;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 20px;
    font-size: 0.8rem;

    @media(max-width: 1000px) {

        max-width: 13rem;
        font-size: 0.6rem;
    }

`

const Icones = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

function ContainerImagem({id, titulo, path, alt}) {

    const {curtidas,jaCurtiu} = useCurtidasContext();
    const ehFavorito = curtidas.some((curtida) => curtida.id === id);
    const {expandirFoto} = useFotoExpandida();

    return (
            <figure key={id}>
                <ImagemEstilizada src={path} alt={alt}/>
                <FigCaption>
                    {titulo}
                    <Icones>
                        {!ehFavorito ? <IoHeartOutline onClick={() => jaCurtiu({id,titulo,path,alt})} size={'1.5rem'} /> : <IoHeartSharp onClick={() => jaCurtiu({id,titulo,path,alt})} size={'1.5rem'}/>}
                        <FaExpandAlt onClick={() => expandirFoto(path) } size={'1.5rem'}  />
                    </Icones>
                </FigCaption>
            </figure>
    )
}

export default ContainerImagem;