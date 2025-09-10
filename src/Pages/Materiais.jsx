import { Header } from "../Components/Header"
import { Link } from "react-router-dom"
import placa from "../assets/placaMaterial.png"

export function Materiais() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex justify-center items-center lg:gap-10 pt-30 lg:px-20 px-5 pb-5">
                <img src={placa} className="lg:block hidden w-150" alt="" />
                <div className="flex flex-col items-center lg:gap-10 font-inter">
                    <div className="lg:bg-gray-text flex flex-col lg:p-10 p-5 lg:pr-20 text-2xl lg:text-black lg:dark:text-black text-header-escuro dark:text-white-text lg:gap-10 gap-5 rounded-xl">
                        <h2>Equipamentos utilizados:</h2>
                        <div>
                            <p><span className="text-4xl font-bold">.</span> Esp32 <br />
                            <span className="text-4xl font-bold">.</span> Sensores <br />
                            <span className="text-4xl font-bold">.</span> Modulo de comunicação <br />
                            <span className="text-4xl font-bold">.</span> Interface de entrada</p>
                        </div>
                        <h2 className="lg:block hidden">Preço final: R$646,89</h2>
                        <h2 className="lg:hidden">Preço final: <br /> R$646,89</h2>
                    </div>
                <img src={placa} className="lg:hidden w-150" alt="" />
                <Link to={"/Pecas"}><button className="lg:mt-0 mt-5 cursor-pointer bg-gray-button px-15 py-2 rounded-xl border text-lg font-bold">Veja as peças aqui</button></Link>
                
                </div>
            </div>
        </div>
    )
}