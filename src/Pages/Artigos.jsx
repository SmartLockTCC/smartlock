import { Header } from "../Components/Header"
import drive from "../assets/drive.png"

export function Artigos() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex justify-center items-center gap-50 px-20 pt-30 pb-5">
                <div className="flex flex-col gap-20 font-inter text-xl">
                    <p className="text-2xl text-dark-blue dark:text-white-text">Fontes utilizadas: Todas as fontes <br /> utilizadas estão presentes no seguinte <br /> link do Google Drive, apenas clicar nos <br /> botões a baixo  :D </p>
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-col gap-15 text-center">
                            <div className="flex gap-15">
                                <a href="https://drive.google.com/file/d/104vpKQ7JCrCDTZcpg8NsbhRwGFwXU9wK/view" className="cursor-pointer bg-gray-button py-5 px-13 font-bold rounded-xl border">Artigo 1</a>
                                <a href="https://drive.google.com/file/d/1F5LCTx9SO0mkj7f0UB9D1s27cBGx5_99/view" className="cursor-pointer bg-gray-button py-5 px-13 font-bold rounded-xl border">Artigo 2</a>
                            </div>
                            <div className="flex gap-15">
                                <a href="https://sol.sbc.org.br/index.php/eri-mt/article/view/31217 " className="cursor-pointer bg-gray-button py-5 px-13 font-bold rounded-xl border">Artigo 3</a>
                                <a href="https://www.scielo.br/j/ea/a/9SRD5P9K7FvFYsv6vmg3Ykn/?format=html&lang=pt" className="cursor-pointer bg-gray-button py-5 px-13 font-bold rounded-xl border">Artigo 4</a>
                            </div>
                        </div>
                        <a href="https://smartcampus.prefeitura.unicamp.br/pub/artigos_relatorios/Gabriel_SmartLock_ESP32.pdf" className="text-center cursor-pointer bg-gray-button py-5 px-13 font-bold rounded-xl border">Artigo 5</a>
                    </div>
                </div>
                <img src={drive} className="w-100" alt="" />
            </div>
        </div>
    )
}