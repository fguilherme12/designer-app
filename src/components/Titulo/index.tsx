import { ReactElement } from "react";
import styled from "styled-components";

interface TituloProps {
    children: ReactElement | string;
}


const Texto = styled.h1`
    color: #993F48;
    font-size: 3rem;
    margin-top: 5rem;
    text-align: center;

    @media(max-width: 750px) {
        font-size: 1.8rem;
        margin-top: 1rem;
    }
`

const Titulo = ({children}: TituloProps) => {
    return (
        <Texto>{children}</Texto>
    )
}

export default Titulo;