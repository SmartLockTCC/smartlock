import { Header } from "../Components/Header"
import video from "../assets/video.png"

export function Instrucao() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex lg:flex-row flex-col justify-center items-center lg:gap-20 gap-10 lg:px-10 px-8 pt-30 pb-5 font-inter">

                <p className="lg:hidden block bg-gray-text w-fit py-10 px-5 lg:text-xl text-lg rounded-xl">Cuidados necessários: <br /> <br />
                    <span className="font-bold text-3xl">.</span> Troque as baterias regularmente para evitar <br /> falhas inesperadas. <br />
                    <span className="font-bold text-3xl">.</span> Evite contato com água, pois pode danificar <br /> componentes internos. <br />
                    <span className="font-bold text-3xl">.</span> Mantenha o sensor de digital limpo para <br /> garantir funcionamento preciso. <br />
                    <span className="font-bold text-3xl">.</span> Atualize o software para melhorar segurança <br /> e desempenho. <br />
                    <span className="font-bold text-3xl">.</span> Use senhas seguras e evite códigos fáceis de <br /> adivinhar. <br />
                    <span className="font-bold text-3xl">.</span> Verifique desgastes mecânicos para garantir <br /> que a fechadura funcione corretamente.
                </p>
                    
                <div className="flex flex-col items-center lg:gap-10 gap-5 text-center lg:text-3xl text-2xl">
                    <p className="lg:hidden block text-dark-blue dark:text-white-text w-fit p-3 rounded-xl">Configurações são feitas pelo nosso aplicativo</p>
                    <div className="flex flex-col bg-gray-text w-fit gap-5 px-5 pt-5 pb-15 rounded-xl">
                        <h1>Instalação da fechadura</h1>
                        <a href=""><img className="cursor-pointer w-120" src={video} alt="" /></a>
                    </div>
                    <p className="lg:block hidden bg-gray-text w-fit p-3 rounded-xl">Configurações são feitas pelo nosso aplicativo</p>
                </div>

                <p className="lg:block hidden bg-gray-text w-fit py-10 px-5 text-xl rounded-xl">Cuidados necessários: <br /> <br />
                    <span className="font-bold text-3xl">.</span> Troque as baterias regularmente para evitar <br /> falhas inesperadas. <br />
                    <span className="font-bold text-3xl">.</span> Evite contato com água, pois pode danificar <br /> componentes internos. <br />
                    <span className="font-bold text-3xl">.</span> Mantenha o sensor de digital limpo para <br /> garantir funcionamento preciso. <br />
                    <span className="font-bold text-3xl">.</span> Atualize o software para melhorar segurança <br /> e desempenho. <br />
                    <span className="font-bold text-3xl">.</span> Use senhas seguras e evite códigos fáceis de <br /> adivinhar. <br />
                    <span className="font-bold text-3xl">.</span> Verifique desgastes mecânicos para garantir <br /> que a fechadura funcione corretamente.</p>
            </div>
        </div>
    )
}