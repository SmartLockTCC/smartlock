import { Header } from "../Components/Header"
import videoJogo from "../assets/videoJogo.png"
import botaoJogoClaro from "../assets/botaoJogoClaro.png"
import botaoJogoEscuro from "../assets/botaoJogoEscuro.png"

export function Jogo() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgJogoClaro.png')] dark:bg-[url('/src/assets/bgJogoEscuro.png')] bg-cover min-h-screen flex justify-center gap-20 items-center px-20 pt-30 pb-5">
                <div className="flex flex-col gap-20 dark:text-white-text font-pt-sans">
                    <h1 className="text-7xl text-header-escuro dark:text-white-text">Jogo Guardian Lock <br /> Aventurando</h1>
                    <p className="text-2xl">
                    Em um reino esquecido, um castelo se <br /> ergue como o último vestígio de uma <br /> civilização perdida, abrigando mistérios e <br /> forças sobrenaturais. Dentro de suas <br /> paredes, quatro guerreiros marcados pelo <br /> destino enfrentam suas próprias histórias <br /> e lutas pessoais.</p>
                </div>

                <div className="flex flex-col items-center gap-5 text-center dark:text-white-text font-pt-sans">
                    <p className="text-xl">Para mais contúdo, veja mais aqui:</p>
                    <a href=""><img className="cursor-pointer w-130" src={videoJogo} alt="" /></a>
                    <button className="cursor-pointer dark:hidden block"><img src={botaoJogoClaro} alt="" /></button>
                    <button className="cursor-pointer dark:block hidden"><img src={botaoJogoEscuro} alt="" /></button>
                </div>
            </div>
        </div>
    )
}