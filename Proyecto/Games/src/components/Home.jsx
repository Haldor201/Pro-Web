import { useAuth } from "../context/authcontext";
export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <header>
        <nav>
          <a href="pagina.html"><b>Inicio</b></a>
          <a href="videojuegos.html"><b>Videojuegos</b></a>
          <a href="accesorios.html"><b>Accesorios</b></a>
          <a href="info.html"><b>Sobre Level Up</b></a>
        </nav>
      </header>

      <div className="slider-frame">
        <ul>
          <li>
            <img src="./img1/c1.png" alt="" />
            <div className="textito">
              <p>Videojuegos y accesorios</p>
              <h1>Level Up</h1>
              <p>¡Encuéntralos aquí!</p>
            </div>
          </li>
          <li>
            <img src="./img1/c2.png" alt="" />
            <div className="textito">
              <p>Videojuegos y accesorios</p>
              <h1>Level Up</h1>
              <p>¡Encuéntralos aquí!</p>
            </div>
          </li>
          <li>
            <img src="./img1/c3.png" alt="" />
            <div className="textito">
              <p>Videojuegos y accesorios</p>
              <h1>Level Up</h1>
              <p>¡Encuéntralos aquí!</p>
            </div>
          </li>
          <li>
            <img src="./img1/c4.png" alt="" />
            <div className="textito">
              <p>Videojuegos y accesorios</p>
              <h1>Level Up</h1>
              <p>¡Encuéntralos aquí!</p>
            </div>
          </li>
        </ul>
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