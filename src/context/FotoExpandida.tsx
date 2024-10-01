import { createContext, ReactNode, useContext, useState } from "react";

interface FotoExpandidaContextType {
    expandida: string | null;
    expandirFoto: (foto: string) => void;
    fecharFoto: () => void;
}

const FotoExpandidaContext = createContext<FotoExpandidaContextType | undefined>(undefined);
FotoExpandidaContext.displayName = 'FotoExpandida';

const useFotoExpandida = () => {
    const context = useContext(FotoExpandidaContext);
    if (!context) {
        throw new Error('useFotoExpandida deve ser usado dentro de um ExpandidaProvider');
    }
    return context;
}

interface ExpandidaProviderProps {
    children: ReactNode
}

function ExpandidaProvider({children} : ExpandidaProviderProps) {

    const [expandida, setExpandida ] = useState<string | null>(null);

    const expandirFoto = (foto: string) => {
        setExpandida(foto);
    }

    const fecharFoto = () => {
        setExpandida(null)
    }

    return (
        <FotoExpandidaContext.Provider value={{expandida,expandirFoto, fecharFoto}}>
            {children}
        </FotoExpandidaContext.Provider>
    )

}

export {
    useFotoExpandida,
    ExpandidaProvider
}
