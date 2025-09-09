import { Header } from "../Components/Header"

export function Home() {
    return(
        <div>
            <Header />
            <div className="lg:bg-[url('/src/assets/bgHome.png')] bg-[url('/src/assets/bgHomeMobile.png')] min-h-screen bg-no-repeat bg-cover flex flex-col lg:justify-center font-pt-sans lg:gap-10 lg:px-20 lg:pt-50 pt-30 px-5 gap-3">
                <h1 className="lg:text-6xl text-3xl text-white-text"><span className="lg:text-dark-blue text-header font-bold">Impulsione</span> sua residência de <br /> forma inteligente e segura</h1>
                <p className="text-white-text ">Com o Guardian Lock, você pode viajar tranquilo, trabalhar focado e <br /> viver com mais liberdade. Se algo acontecer, você será o primeiro a <br /> saber, pois sua segurança é nossa prioridade.</p>
            </div>
        </div>
    )
}