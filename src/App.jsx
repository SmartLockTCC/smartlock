import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
