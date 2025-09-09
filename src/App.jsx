import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Instrucao } from "./Pages/Instrucao"
import { Jogo } from "./Pages/Jogo"
import { SobreNos } from "./Pages/SobreNos"
import { Artigos } from "./Pages/Artigos"
import { Materiais } from "./Pages/Materiais"
import { Pecas } from "./Pages/Pecas"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Instrucao" element={<Instrucao/>}></Route>
        <Route path="/Jogo" element={<Jogo/>}></Route>
        <Route path="/SobreNos" element={<SobreNos/>}></Route>
        <Route path="/Artigos" element={<Artigos/>}></Route>
        <Route path="/Materiais" element={<Materiais/>}></Route>
        <Route path="/Pecas" element={<Pecas/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
