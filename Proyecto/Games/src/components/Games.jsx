import { useAuth } from "../context/authcontext";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import c1 from "../imgs/c1.png"
import c2 from "../imgs/c2.png"
import c3 from "../imgs/c3.png"
import c4 from "../imgs/c4.png"
export default function Home() {
  const { user } = useAuth();
  const slides = [
    {
      url: c1
    },
    {
      url: c2
    },
    {
      url: c3
    },

    {
      url: c4
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <header className="bg-black text-white py-4">
      <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10">
        <span className="text-lg font-bold cursor-pointer">Inicio</span>
        <span className="text-lg font-bold cursor-pointer">Videojuegos</span>
        <span className="text-lg font-bold cursor-pointer">Accesorios</span>
        <span className="text-lg font-bold cursor-pointer">Sobre Level Up</span>
      </nav>
    </header>

    <div className='h-[780px] w-full m-auto  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>

      <section id="sub-ten">
        <div className="sub-ten">
          <span className="animado"><br /><b>En tendencia - En tendencia - En tendencia - En tendencia - En tendencia - En tendencia</b><br /><br /></span><br />
        </div>
      </section>

      <section id="ten">
        {[
          { src: "./img1/splatoon.png", alt: "Splatoon 3 (Nintendo Switch)" },
          { src: "./img1/gtav.jpg.png", alt: "GTA V (PC)" },
          { src: "./img1/f123.png", alt: "F1 2023 (PC)" },
          { src: "./img1/fc24.png", alt: "FC24 (PC)" },
          { src: "./img1/efootball.png", alt: "E Football 2024 (PC)" },
          { src: "./img1/mariomaker.png", alt: "Super Mario Maker 2 (Nintendo Switch)" },
          { src: "./img1/gow.png", alt: "God of War Ragnarok (PS5)" },
          { src: "./img1/acc.png", alt: "Assetto Corsa Competizione (PS5)" },
          { src: "./img1/echo.png", alt: "Echo Generation (Xbox X)" },
          { src: "./img1/ssb.png", alt: "Super Smash Bros Ultimate (Nintendo Switch)" }
        ].map((item, index) => (
          <div className="image-container" key={index}>
            <img className={`img${index % 3 + 1}`} src={item.src} width="300" height="168.75" alt={item.alt} />
            <span className="overlay">{item.alt}</span>
          </div>
        ))}
      </section>

      <section id="sub-ten">
        <div className="sub-ten">
          <span className="animado"><br /><b>Más vendidos - Más vendidos - Más vendidos - Más vendidos - Más vendidos - Más vendidos</b><br /><br /></span><br />
        </div>
      </section>

      <section id="ten">
        {[
          { src: "./img1/minecraft.png", alt: "Minecraft (PC)" },
          { src: "./img1/fall.jpg", alt: "Fallout 4 GOTY Edition (PC)" },
          { src: "./img1/gtav.jpg.png", alt: "GTA V (PC)" },
          { src: "./img1/gt7.png", alt: "Gran Turismo 7 (PS5)" },
          { src: "./img1/mariowonder.jpg", alt: "Super Mario Bros Wonder (Nintendo Switch)" },
          { src: "./img1/tekken8.jpg", alt: "Tekken 8 (PS5)" },
          { src: "./img1/zelda.png", alt: "The Legend of Zelda: Tears of the Kingdom (Nintendo Switch)" },
          { src: "./img1/pokemon.png", alt: "Pokémon: Let's Go Pikachu / Evee (Nintendo Switch)" },
          { src: "./img1/horizon.png", alt: "Horizon Zero Dawn (PS5)" },
          { src: "./img1/motogp.png", alt: "MotoGP 23 (PS5)" }
        ].map((item, index) => (
          <div className="image-container" key={index}>
            <img className={`img${index % 3 + 1}`} src={item.src} width="300" height="168.75" alt={item.alt} />
            <span className="overlay">{item.alt}</span>
          </div>
        ))}
      </section>

      <br />

      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>¡Síguenos en nuestras Redes Sociales!</h1>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <a href="https://www.facebook.com/?locale=es_LA"><img src="./img1/facebook.png" width="120px" height="120px" style={{ marginRight: '10px' }} alt="Facebook" /></a>
          <a href="https://www.instagram.com/"><img src="./img1/instagram.png" width="120px" height="120px" style={{ marginRight: '10px' }} alt="Instagram" /></a>
          <a href="https://www.tiktok.com/es/"><img src="./img1/tiktok.png" width="120px" height="120px" style={{ marginRight: '10px' }} alt="TikTok" /></a>
          <a href="https://www.youtube.com/@levelup00001"><img src="./img1/youtube.png" width="120px" height="120px" style={{ marginRight: '10px' }} alt="YouTube" /></a>
          <a href="https://x.com/"><img src="./img1/xtwitter.png" width="120px" height="120px" alt="X/Twitter" /></a>
        </div>
      </section>

      <div id="floating-container">
        <div id="floating-chat">
          <div id="output"></div>
          <input type="text" id="input" placeholder="Escribe aquí..." />
        </div>
      </div>

      <div id="botoninicio-container">
        <div id="botoninicio-chat">
          <div id="output1"></div>
        </div>
        <a href="index.html" id="botoninicio">Volver</a>
      </div>

      <br />
      <br />
    </div>
  )
}