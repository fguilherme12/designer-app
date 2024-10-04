import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface AutenticacaoContextType {
    registerUser: (user: Usuario) => void;
    signOut: () => void;
    tokenExpired: () => void;
    signIn: (user : Usuario) => void;
    userLogged: boolean | null;
    errorMessageLogin: string | null;
    errorMessageRegister: string | null;
}

interface AutenticacaoProviderProps {
    children: ReactNode;
}

interface Usuario {
    email: string,
    password: string,
    name?: string,
}

interface DecodedToken {
    sub: string;
    name: string;
    email: string;
    exp: string;
    iat: string;

}

const AutenticacaoContext = createContext<AutenticacaoContextType | undefined>(undefined);
AutenticacaoContext.displayName = 'Autenticacao';

const useAutenticacao = () => {
    const context = useContext(AutenticacaoContext)
    
    if (!context) {
        throw new Error('useAutenticacao deve ser usado dentro de um AutenticacaoProvider');
    }

    return context;
} 


function AutenticacaoProvider({children} : AutenticacaoProviderProps) {
    const token = localStorage.getItem('token')
    const [userLogged,setUserLogged] = useState<boolean | null>(token != null)
    const [errorMessageRegister, setErrorMessageRegister] = useState<string | null>(null)
    const [errorMessageLogin, setErrorMessageLogin] = useState<string | null>(null)


    const registerUser = async ({name,email,password}: Usuario) => {
        const response = await axios.post('http://localhost:3000/user', {name,email,password})
        .then(() => {
            alert('Usuario Cadastrado com sucesso')
            setErrorMessageRegister(null)
            window.location.href = '/login';
        }).catch((erro) =>
            setErrorMessageRegister(erro.response.data.message)
        )

    }

    const signIn = async ({email,password} : Usuario) => {
        const response = await axios.post('http://localhost:3000/login', {email,password}).
        then ((resposta) => {
            localStorage.setItem('token', resposta.data.access_token) 
            getUserName()
            setUserLogged(true)
            setErrorMessageLogin(null)
            alert(`Login Efetuado com sucesso, seja bem vindo ${localStorage.getItem('name')}`) 
            window.location.href = '/';
        }).catch ((erro)  => {
            setErrorMessageLogin(erro.response.data.message)
        })
    };

    const getUserName = () => {
        const token = localStorage.getItem('token')
        
        if (token) {
        const decoded : DecodedToken = jwtDecode(token)
        const userName = localStorage.setItem('name',decoded.name)
         return userName
        }        
    };

    const tokenExpired = () => {
        const token = localStorage.getItem('token')
        const timestampAtual = Math.floor(Date.now() / 1000);

        if(token) {
            const decoded : DecodedToken = jwtDecode(token)
            const exp = Number(decoded.exp)

            if(timestampAtual > exp) {
                signOut()
            }
        }
    }
    
    const signOut = () => {
        localStorage.clear()
        setUserLogged(null)
    }

    
    return (
        <AutenticacaoContext.Provider value={{registerUser,signOut, signIn, userLogged, tokenExpired,errorMessageLogin, errorMessageRegister}}>
            {children}
        </AutenticacaoContext.Provider>
    )
}

export {
    useAutenticacao,
    AutenticacaoProvider,
}