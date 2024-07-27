import { Link, useLocation } from "react-router-dom";



// eslint-disable-next-line react/prop-types
function LinkEstilizado({to, children}) {
    
    const localizacao = useLocation();

    const comparacao = localizacao.pathname === to ? {backgroundColor: '#eb666d', borderRadius: '1.5rem', padding: '0.5rem'} : { backgroundColor: 'transparent'}

    return (
        <Link style={comparacao} to={to}> {children} </Link>
    )
}

export default LinkEstilizado;