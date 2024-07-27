/* eslint-disable react/prop-types */
import styled from "styled-components";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaExpandAlt} from "react-icons/fa";
import { useCurtidasContext } from "../../context/FotosCurtidas";
import { useFotoExpandida } from "../../context/FotoExpandida";

const ImagemEstilizada = styled.img`
    width: 400px;
    border-radius: 20px 20px 0 0;
    height: 500px;
    object-fit: cover;
`


const FigCaption = styled.figcaption`
    display: flex;
    gap: 10px;
    max-width: 400px;
    justify-content: space-between;
    background-color: #d15b67;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 20px;
    font-size: 1rem;
`

const Icones = styled.div`
    display: flex;
    gap: 10px;
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
                        {!ehFavorito ? <IoHeartOutline onClick={() => jaCurtiu({id,titulo,path,alt})} size={'33px'} /> : <IoHeartSharp onClick={() => jaCurtiu({id,titulo,path,alt})} size={'33px'}/>}
                        <FaExpandAlt onClick={() => expandirFoto(path) } size={'30px'}  />
                    </Icones>
                </FigCaption>
            </figure>
    )
}

export default ContainerImagem;