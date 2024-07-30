import styled from "styled-components";


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

// eslint-disable-next-line react/prop-types
export default function Titulo({children}) {
    return (
        <Texto>{children}</Texto>
    )
}