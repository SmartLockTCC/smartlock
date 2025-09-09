import { Header } from "../Components/Header"
import React, { useRef, useState } from 'react';
import ramos from "../assets/ramos.png"
import job from "../assets/job.png"
import rosa from "../assets/rosa.png"
import marcelino from "../assets/marcelino.png"

const cards = [
  {
    imagem: ramos,
    name: "Pedro Ramos",
    email: "Email de contato: pdr.ramos.duarte@gmail.com",
    description: ""
  },
  {
    imagem: job,
    name: "Kayque Job",
    email: "Email de contato: kayquejob1@gmail.com",
    youtube: "",
    description: "Sou estudante do Ensino Médio, apaixonado por história e fascinado pelo mundo do design, web e robótica. Meu objetivo é transformar este projeto na melhor versão possível, dedicando-me com empenho e criatividade."
  },
  {
    imagem: rosa,
    name: "Eduardo Rosa",
    email: "Email de contato: eduardo.mr@gmail.com",
    description: "Aluno de instituição UNASP, é estudioso na área de TI e Software, gosto de jogar video game nas horas vagas."
  },
  {
    imagem: marcelino,
    name: "Miguel Marcelino",
    email: "Telefone:+55 11 96832-0078",
    description: ""
  },
];

export function SobreNos() {
    const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
    const onMouseLeave = () => {
        setIsDragging(false);
      };
      const onMouseUp = () => {
        setIsDragging(false);
      };
      const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // velocidade do deslize
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };

    return(
        <div>
            <Header />
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex justify-center items-center pt-20 px-20">
                <div ref={carouselRef} className="flex overflow-x-auto snap-x scrollbar-hide cursor-grabbing"
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}>
                  {cards.map((card, index) => (
                    <div key={index} className="flex flex-col items-center w-80 p-4 m-4 bg-gray-button rounded-4xl snap-start select-none font-inter">
                      <div className="flex w-40 h-40 justify-center mb-4">
                          <img src={card.imagem} alt="" />
                      </div>

                      <h3 className="bg-gray-produtos rounded-3xl px-15 text-xl py-1 text-center font-semibold mb-3">{card.name}</h3>

                      <div className="bg-gray-descricao h-70 w-70 p-5 rounded-3xl text-xs flex flex-col gap-5">
                        <div>
                          <p>{card.email}</p>
                          <p>{card.youtube}</p>
                        </div>
                        <p>{card.description}</p>
                      </div>
      
                    </div>
                ))}</div>
            </div>
        </div>
    )
}