import { Header } from "../Components/Header"
import drive from "../assets/drive.png"

export function Artigos() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex lg:flex-row flex-col justify-center items-center lg:gap-50 gap-5 lg:px-20 px-5 pt-30 pb-5">
                <div className="flex flex-col lg:gap-20 gap-5 font-inter text-xl">
                    <p className="lg:block hidden text-2xl text-dark-blue dark:text-white-text">Fontes utilizadas: Todas as fontes <br /> utilizadas estão presentes no seguinte <br /> link do Google Drive, apenas clicar nos <br /> botões a baixo  :D </p>
                    <p className="lg:hidden text-dark-blue dark:text-white-text">Fontes utilizadas: Todas as fontes utilizadas estão presentes no seguinte link do Google Drive, apenas clicar nos botões a baixo  :D </p>
                    <div className="flex flex-col lg:text-lg text-sm items-center lg:gap-10 gap-5">
                        <div className="flex flex-col items-center lg:gap-15 gap-5 text-center">
                            <div className="flex lg:gap-15 gap-5">
                                <a href="https://drive.google.com/file/d/104vpKQ7JCrCDTZcpg8NsbhRwGFwXU9wK/view" className="cursor-pointer bg-gray-button lg:py-5 py-3 lg:px-13 px-8 font-bold rounded-xl border">Artigo 1</a>
                                <a href="https://drive.google.com/file/d/1F5LCTx9SO0mkj7f0UB9D1s27cBGx5_99/view" className="cursor-pointer bg-gray-button lg:py-5 py-3 lg:px-13 px-8 font-bold rounded-xl border">Artigo 2</a>
                            </div>
                            <div className="flex lg:gap-15 gap-5">
                                <a href="https://sol.sbc.org.br/index.php/eri-mt/article/view/31217 " className="cursor-pointer bg-gray-button lg:py-5 py-3 lg:px-13 px-8 font-bold rounded-xl border">Artigo 3</a>
                                <a href="https://www.scielo.br/j/ea/a/9SRD5P9K7FvFYsv6vmg3Ykn/?format=html&lang=pt" className="cursor-pointer bg-gray-button lg:py-5 py-3 lg:px-13 px-8 font-bold rounded-xl border">Artigo 4</a>
                            </div>
                        </div>
                        <a href="https://smartcampus.prefeitura.unicamp.br/pub/artigos_relatorios/Gabriel_SmartLock_ESP32.pdf" className="cursor-pointer bg-gray-button lg:py-5 py-3 lg:px-13 px-8 font-bold rounded-xl border text-center">Artigo 5</a>
                    </div>
                </div>
                <img src={drive} className="lg:w-100 w-40" alt="" />
            </div>
        </div>
    )
}