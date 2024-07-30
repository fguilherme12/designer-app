import { useFotoExpandida } from "../../../context/FotoExpandida"
import styled from "styled-components";
import { IoCloseCircle } from "react-icons/io5";

const Imagem = styled.img`
      max-width: 90%;
      max-height: 90%;
`

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const BotaoFechar = styled(IoCloseCircle)`
    position: absolute;
    top: 9rem;
    right: 1rem;
    cursor: pointer;
`


export default function FotoExpandida() {

    const {fecharFoto, expandida} = useFotoExpandida();
    
    if(!expandida) return null

    return (      
        <Container onClick={fecharFoto}>
                <Imagem src={expandida}  alt="Expandida"/>
                <BotaoFechar size={'3rem'} color='white'/>
        </Container>  
    )
}