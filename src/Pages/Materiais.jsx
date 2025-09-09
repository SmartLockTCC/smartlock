import { Header } from "../Components/Header"
import { Link } from "react-router-dom"
import esp32 from "../assets/esp32.png"

export function Materiais() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex items-center pt-30 px-20 pb-5">
                <img src={esp32} className="w-200" alt="" />
                <div className="flex flex-col items-center gap-10 font-inter">
                    <div className="bg-gray-text flex flex-col p-10 pr-20 text-2xl gap-10 rounded-xl">
                        <h2>Equipamentos utilizados:</h2>
                        <p><span className="text-4xl font-bold">.</span> Esp32 <br />
                        <span className="text-4xl font-bold">.</span> Sensores <br />
                        <span className="text-4xl font-bold">.</span> Modulo de comunicação <br />
                        <span className="text-4xl font-bold">.</span> Interface de entrada</p>
                        <h2>Preço final: R$646,89</h2>
                    </div>
                <Link to={"/Pecas"}><button className="cursor-pointer bg-gray-button px-15 py-2 rounded-xl border text-lg font-bold">Veja as peças aqui</button></Link>
                </div>
            </div>
        </div>
    )
}