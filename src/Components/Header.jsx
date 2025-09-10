import logoClaro from "../assets/logoClaro.png"
import logoEscuro from "../assets/logoEscuro.png"
import modoClaro from "../assets/modoClaro.png"
import modoEscuro from "../assets/modoEscuro.png"
import setaClaro1 from "../assets/setaClaro1.png"
import setaClaro2 from "../assets/setaClaro2.png"
import setaEscuro1 from "../assets/setaEscuro1.png"
import setaEscuro2 from "../assets/setaEscuro2.png"
import menuClaro from "../assets/menuClaro.png"
import menuEscuro from "../assets/menuEscuro.png"

import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import { useState } from "react"

export function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark") {
            tagHTML.classList.add("dark")
        }
    }, [theme])

    const [estaAberto, setEstaAberto] = useState(false);
    const toggleMenu = () => {
        setEstaAberto(!estaAberto);
    };

    return(
        <header className="bg-header fixed w-full dark:bg-header-escuro flex justify-between lg:px-10 px-3 lg:py-2 py-4">
            <div className="lg:w-60 w-40">
                <Link to={"/"}>
                    <img src={logoClaro} className="dark:hidden block" alt="" />
                    <img src={logoEscuro} className="dark:block hidden" alt="" />
                </Link>
            </div>
            
            <div className="flex gap-10 items-center">
                <button className="lg:block hidden cursor-pointer w-25" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                    {theme === "dark" ? (
                            <img src={modoEscuro} className="dark:block hidden" alt="" />
                        ) : (
                            <img src={modoClaro} className="dark:hidden block" alt="" />
                    )}
                </button>

                <div className="lg:w-15 flex gap-1">
                    <div className="lg:block hidden">
                        <button className="cursor-pointer dark:hidden block" onClick={toggleMenu}>
                            <img src={estaAberto ? setaClaro2 : setaClaro1} alt="" />
                        </button>
                        <button className="cursor-pointer dark:block hidden" onClick={toggleMenu}>
                            <img src={estaAberto ? setaEscuro2 : setaEscuro1} alt="" />
                        </button>
                    </div>

                    <div className={`${estaAberto ? 'block' : 'hidden'} lg:hidden flex items-center}`}>
                        <button className="cursor-pointer w-16" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                            {theme === "dark" ? (
                                    <img src={modoEscuro} className="dark:block hidden" alt="" />
                                ) : (
                                    <img src={modoClaro} className="dark:hidden block" alt="" />
                            )}
                        </button>
                    </div>

                    <div className="lg:hidden block w-12">
                        <button className="cursor-pointer dark:hidden block" onClick={toggleMenu}>
                            <img src={menuClaro} alt="" />
                        </button>
                        <button className="cursor-pointer dark:block hidden" onClick={toggleMenu}>
                            <img src={menuEscuro} alt="" />
                        </button>
                    </div>

                    <div className={`${estaAberto ? 'block' : 'hidden'} bg-header dark:bg-header-escuro absolute right-0 z-10 h-screen lg:p-15 p-5 w-50vh lg:mt-20 mt-15 lg:pt-20 pt-10`}>
                        <div className="flex flex-col text-header dark:text-header gap-10 font-inter font-bold lg:text-xl text-center">
                            <Link to={"/Instrucao"} className="bg-blue-text dark:bg-blue-button lg:px-7 px-3 py-3 rounded-xl">Instrução</Link>
                            <Link to={"/Jogo"} className="bg-blue-text dark:bg-blue-button lg:px-7 px-3 py-3 rounded-xl">Jogo</Link>
                            <Link to={"/SobreNos"} className="bg-blue-text dark:bg-blue-button lg:px-7 px-3 py-3 rounded-xl">Sobre Nós</Link>
                            <Link to={"/Artigos"} className="bg-blue-text dark:bg-blue-button lg:px-7 px-3 py-3 rounded-xl">Artigos</Link>
                            <Link to={"/Materiais"} className="bg-blue-text dark:bg-blue-button lg:px-7 px-3 py-3 rounded-xl">Materiais</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}