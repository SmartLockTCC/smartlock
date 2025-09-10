import { Header } from "../Components/Header"
import { Link } from "react-router-dom"
import React, { useRef, useState } from 'react';
import esp32 from "../assets/esp32.png"
import sensorPresenca from "../assets/sensorPresenca.png"
import placa from "../assets/placa.png"
import rfid from "../assets/rfid.png"
import servo from "../assets/servo.png"
import modulo from "../assets/modulo.png"
import conversor from "../assets/conversor.png"
import lcd from "../assets/lcd.png"

const cards = [
  {
    imagem: sensorPresenca,
    name: "Sensor de Presença",
    preco: "R$8,90",
  },
  {
    imagem: placa,
    name: "Placa Mega 2560 R3",
    preco: "R$118,00",
  },
  {
    imagem: rfid,
    name: "Kit RFID Mfrc522 (13,56MHz)",
    preco: "R$13,50",
  },
  {
    imagem: servo,
    name: "Servo TowerPro MG996R Metálico",
    preco: "R$55,00",
  },
  {
    imagem: modulo,
    name: "Modulo Bluetooth - HC-05",
    preco: "R$29,90",
  },
  {
    imagem: conversor,
    name: "Conversor de Nível Lógico RC",
    preco: "R$4,90",
  },
  {
    imagem: lcd,
    name: "LCD 16x2 5V Branco no Azul",
    preco: "R$16,90",
  },
];

export function Pecas() {
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
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex lg:flex-row flex-col justify-center items-center lg:px-20 px-5 lg:pt-20 pt-30">
                <div ref={carouselRef} className="lg:flex hidden overflow-x-auto snap-x scrollbar-hide cursor-grabbing"
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}>
                  {cards.map((card, index) => (
                    <div key={index} className="w-80 p-4 m-4 lg:bg-gray-produtos bg-gray-text lg:rounded-lg rounded-4xl snap-start select-none font-inter flex lg:flex-col items-center lg:gap-10 gap-2">
                        <h3 className="lg:block hidden bg-gray-button w-fit px-10 text-center text-lg rounded-xl border py-3 font-bold">{card.name}</h3>

                        <div className="flex lg:w-60 lg:h-50 justify-center">
                            <img src={card.imagem} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                          <h3 className="lg:hidden w-fit px-10 text-center text-sm font-bold">{card.name}</h3>
                          <p className="text-center font-bold text-lg">{card.preco}</p>
                        </div>
                    </div>
                ))}</div>
                {cards.map((card, index) => (
                <div key={index} className="lg:hidden w-80 p-4 m-4 bg-gray-text rounded-4xl font-inter flex lg:flex-col items-center gap-2">

                        <div className="flex lg:w-60 lg:h-50 justify-center">
                            <img src={card.imagem} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                          <h3 className="lg:hidden w-fit px-10 text-center text-sm font-bold">{card.name}</h3>
                          <p className="text-center text-header-escuro font-bold text-lg">{card.preco}</p>
                        </div>
                </div>))}
                <Link to={"/Materiais"}><button className="lg:hidden cursor-pointer bg-gray-button px-15 py-2 rounded-xl border text-lg font-bold mb-5">Voltar</button></Link>
            </div>
        </div>
    )
}