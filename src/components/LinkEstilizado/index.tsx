import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkEstilizadoProps {
    to: string,
    children: string | ReactNode,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>,
}


function LinkEstilizado({to, children, onClick}: LinkEstilizadoProps) {
    
    const localizacao = useLocation();

    const comparacao = localizacao.pathname === to ? {backgroundColor: '#eb666d', borderRadius: '1.5rem', padding: '0.5rem'} : { backgroundColor: 'transparent'}

    return (
        <Link style={comparacao} to={to} onClick={onClick}> {children} </Link>
    )
}

export default LinkEstilizado;