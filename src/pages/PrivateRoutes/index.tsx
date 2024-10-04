import { Navigate, Outlet } from "react-router-dom";
import { useAutenticacao } from "../../context/Autenticacao";
import { useEffect } from "react";

const PrivateRoute = () => {
    
    const {userLogged, tokenExpired} = useAutenticacao()

    
    useEffect(() => {
        tokenExpired()
    },[])

    return userLogged ? <Outlet /> : <Navigate to="/login" /> 
}

export default PrivateRoute;