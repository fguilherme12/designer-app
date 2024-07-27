import { createContext, useContext, useState } from "react";

const FotoExpandidaContext = createContext();
FotoExpandidaContext.displayName = 'FotoExpandida';

const useFotoExpandida = () => {
    return useContext(FotoExpandidaContext)
}

// eslint-disable-next-line react/prop-types
function ExpandidaProvider({children}) {

    const [expandida, setExpandida ] = useState(null);

    const expandirFoto = (foto) => {
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
    // eslint-disable-next-line react-refresh/only-export-components
    useFotoExpandida,
    ExpandidaProvider
}
