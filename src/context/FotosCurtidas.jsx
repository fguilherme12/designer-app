import { createContext, useContext, useState } from "react";


export const FotosCurtidasContext = createContext();
FotosCurtidasContext.displayName= "Curtidas" ;

// eslint-disable-next-line react/prop-types
export default function CurtidasProvider({children}) {

    const [curtidas,setCurtidas] = useState([])

    return (
        <FotosCurtidasContext.Provider value={{curtidas,setCurtidas}}>
            {children}
        </FotosCurtidasContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCurtidasContext() { 
    const {curtidas,setCurtidas} = useContext(FotosCurtidasContext);

    function jaCurtiu(novaCurtida) {
        const curtiu = curtidas.some(curtida => curtida.id === novaCurtida.id )

        let listaCurtidas = [...curtidas]

        if(!curtiu) {
            listaCurtidas.push(novaCurtida)
            return setCurtidas(listaCurtidas)
        }

        listaCurtidas = curtidas.filter((curtiu) => curtiu.id !== novaCurtida.id);
        return setCurtidas(listaCurtidas)
    }


    return {
        
        curtidas,
        jaCurtiu,
    }
}