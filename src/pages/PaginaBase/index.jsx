import EstiloGlobal from "../../components/EstiloGlobal"
import Cabecalho from "../../components/Cabecalho"
import Rodape from "../../components/Rodape"
import styled from "styled-components"
import { Outlet } from "react-router-dom"
import CurtidasProvider from "../../context/FotosCurtidas"
import { ExpandidaProvider } from "../../context/FotoExpandida"
import FotoExpandida from "../../components/ContainerImagem/FotoExpandida"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

function PaginaBase() {
    return ( 
         <Container>
            <EstiloGlobal/>
            <Cabecalho/>
            <ExpandidaProvider>
            <CurtidasProvider>
              <Outlet/>
              <FotoExpandida/>
            </CurtidasProvider>      
            </ExpandidaProvider>
            <Rodape/>
         </Container>
    )
}

export default PaginaBase;