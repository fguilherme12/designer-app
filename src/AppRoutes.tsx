import { BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./pages/Inicio"
import Brow from "./pages/Procedimentos/Brow"
import Sobrancelha from "./pages/Procedimentos/Sobrancelha"
import Lash from "./pages/Procedimentos/Lash"
import Duvidas from "./pages/Duvidas"
import QuemSomos from "./pages/QuemSomos"
import PaginaBase from "./pages/PaginaBase"
import ScroolToTop from "./components/ScroolToTop"
import FormularioLogin from "./pages/FormularioLogin"
import FormularioCadastro from "./pages/FormularioCadastro"
import MinhaConta from "./pages/PrivateRoutes/MinhaConta"
import PrivateRoute from "./pages/PrivateRoutes"
import Ficha from "./pages/PrivateRoutes/Ficha"

function App() {

  return (
    <BrowserRouter>
      <ScroolToTop />
      <Routes>
        <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Inicio/>}></Route>
            <Route path="/brow" element={<Brow/>}></Route>
            <Route path="/sobrancelhas" element={<Sobrancelha/>}></Route>
            <Route path="/lash" element={<Lash/>}></Route>
            <Route path="/duvidas" element={<Duvidas/>}></Route>
            <Route path="/quem-somos" element={<QuemSomos/>}> </Route>
            <Route path="/login" element={<FormularioLogin />}> </Route>
            <Route path="/cadastro" element={<FormularioCadastro />}></Route>
            
            <Route path="/minhaConta" element={<PrivateRoute />}>
              <Route index element={<MinhaConta />}></Route>
              <Route path="ficha" element={<Ficha />} />
            </Route>
            
            <Route path="*" element={<h1>Erro 404</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
