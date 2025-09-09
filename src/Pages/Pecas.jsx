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
            <div className="bg-[url('/src/assets/bgInstrucaoClaro.png')] dark:bg-[url('/src/assets/bgInstrucaoEscuro.png')] min-h-screen bg-cover flex justify-center items-center px-20 pt-20">
                <div ref={carouselRef} className="flex overflow-x-auto snap-x scrollbar-hide cursor-grabbing"
                  onMouseDown={onMouseDown}
                  onMouseLeave={onMouseLeave}
                  onMouseUp={onMouseUp}
                  onMouseMove={onMouseMove}
                  style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}>
                  {cards.map((card, index) => (
                    <div key={index} className="flex-none w-80 p-4 m-4 bg-gray-produtos rounded-lg snap-start select-none font-inter flex flex-col items-center gap-10">
                        <h3 className="bg-gray-button w-fit px-10 text-center text-lg rounded-xl border py-3 font-bold">{card.name}</h3>

                        <div className="flex w-60 h-50 justify-center">
                            <img src={card.imagem} alt="" />
                        </div>

                        <p className="text-center font-bold text-lg">{card.preco}</p>
                    </div>
                ))}</div>
            </div>
        </div>
    )
}