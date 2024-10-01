import { createContext, ReactNode, useContext, useState } from "react";
import IFoto from "../interface/IFoto";

interface FotosCurtidasContextType {
    curtidas: IFoto[];
    setCurtidas: any
}

export const FotosCurtidasContext = createContext<FotosCurtidasContextType | undefined>(undefined);
FotosCurtidasContext.displayName= "Curtidas" ;

const useFotoCurtida = () => {
    const context = useContext(FotosCurtidasContext);
    if (!context) {
        throw new Error('useFotoExpandida deve ser usado dentro de um ExpandidaProvider');
    }
    return context;
}

interface CurtidasProviderProps {
    children: ReactNode
}

export default function CurtidasProvider({children} : CurtidasProviderProps) {

    const [curtidas,setCurtidas] = useState([])

    return (
        <FotosCurtidasContext.Provider value={{curtidas,setCurtidas}}>
            {children}
        </FotosCurtidasContext.Provider>
    )
}

export function useCurtidasContext() { 
    const {curtidas,setCurtidas} = useFotoCurtida();

    function jaCurtiu(novaCurtida : IFoto) {
        const curtiu = curtidas.some((curtida: { id: number }) => curtida.id === novaCurtida.id )

        let listaCurtidas = [...curtidas]

        if(!curtiu) {
            listaCurtidas.push(novaCurtida)
            return setCurtidas(listaCurtidas)
        }

        
        listaCurtidas = curtidas.filter((curtiu: { id: number }) => curtiu.id !== novaCurtida.id);
        return setCurtidas(listaCurtidas)
    }


    return {
        curtidas,
        jaCurtiu,
    }
}