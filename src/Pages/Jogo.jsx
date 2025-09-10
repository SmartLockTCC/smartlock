import { Header } from "../Components/Header"
import videoJogo from "../assets/videoJogo.png"
import botaoJogoClaro from "../assets/botaoJogoClaro.png"
import botaoMobileClaro from "../assets/botaoMobileClaro.png"
import botaoJogoEscuro from "../assets/botaoJogoEscuro.png"

export function Jogo() {
    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgJogoClaro.png')] dark:bg-[url('/src/assets/bgJogoEscuro.png')] bg-cover min-h-screen flex lg:flex-row flex-col justify-center lg:gap-20 gap-5 items-center lg:px-20 px-5 pt-30 pb-5">
                <div className="flex flex-col lg:gap-20 gap-5 dark:text-white-text font-pt-sans">
                    <h1 className="lg:block hidden text-6xl text-header-escuro dark:text-white-text">Jogo Guardian Lock <br /> Aventurando</h1>
                    <h1 className="lg:hidden text-3xl text-header-escuro dark:text-white-text">Jogo Guardian Lock Aventurando</h1>
                    <p className="lg:block hidden text-2xl">
                    Em um reino esquecido, um castelo se <br /> ergue como o último vestígio de uma <br /> civilização perdida, abrigando mistérios e <br /> forças sobrenaturais. Dentro de suas <br /> paredes, quatro guerreiros marcados pelo <br /> destino enfrentam suas próprias histórias <br /> e lutas pessoais.</p>
                    <p className="lg:hidden text-lg">
                    Em um reino esquecido, um castelo se ergue como o último vestígio de uma civilização perdida, abrigando mistérios e forças sobrenaturais. Dentro de suas paredes, quatro guerreiros marcados pelo destino enfrentam suas próprias histórias e lutas pessoais.</p>
                </div>

                <div className="flex flex-col items-center gap-5 lg:text-center dark:text-white-text font-pt-sans">
                    <p className="lg:text-xl text-lg">Para mais contúdo, veja mais aqui:</p>
                    <a href=""><img className="cursor-pointer w-130" src={videoJogo} alt="" /></a>
                    <a href="" className="lg:block hidden cursor-pointer lg:dark:hidden"><img src={botaoJogoClaro} alt="" /></a>
                    <a href="" className="lg:hidden block cursor-pointer dark:hidden block"><img src={botaoMobileClaro} alt="" /></a>
                    <a href="" className="cursor-pointer dark:block hidden"><img src={botaoJogoEscuro} alt="" /></a>
                </div>
            </div>
        </div>
    )
}