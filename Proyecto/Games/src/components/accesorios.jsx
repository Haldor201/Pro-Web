import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { useAuth } from "../context/authcontext";
import fondo from "../imgs/accesoriosEnc.png";
function accesorios() {
  const { user,getGamesO } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <header className="bg-black text-white py-4 relative">
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-10">
          <span
            onClick={() => {
              navigate("/Home");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Inicio
          </span>
          <span
            onClick={() => {
              navigate("/VideoGames");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Videojuegos
          </span>
          <span
            onClick={() => {
              navigate("/Accesorios");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Accesorios
          </span>
          <span
            onClick={() => {
              navigate("/About");
            }}
            className="text-lg font-bold cursor-pointer"
          >
            Sobre Level Up
          </span>
        </nav>
        <div
          onClick={() => { 
          getGamesO();
          navigate("/profile") }}
          className="cursor-pointer absolute top-4 right-4 flex items-center space-x-2"
        >
          <BsPerson size={24} />
          <span>{user === null ? "null" : user.email}</span>
        </div>
      </header>
      <div className="relative w-full h-full">
        <div>
            <img
            src={fondo}
            alt="Fondo"
            className="absolute top-0 left-0 w-full h-screen object-cover"
            />
        </div>
        
        <div className="relative z-10">

        </div>
      </div>
    </div>
  );
}

export default accesorios;
