import Level from "../imgs/Level Up logo.png";
import { useForm } from "react-hook-form";
import Face from "../imgs/facebook.png";
import Insta from "../imgs/instagram.png";
import { useAuth } from "../context/authcontext";
import { useNavigate } from 'react-router-dom';

function Login() {
  const { signin} = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    signin(values)
    navigate("/Home");
  };

  return (
    <div className="flex justify-center items-center bg-fondo-inicio bg-top w-full h-screen">
      <div className="rounded-md w-1/3 container text-gray-200 bg-slate-700 formL">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <img src={Level} className="w-64" />
          </div>
          <div className="grid justify-items-center">
            <label htmlFor="gmail">Ingresar usuario</label>
            <input
              id="gmail"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              {...register("email", { required: true })}
            />
            <label htmlFor="password">Ingresar contraseña</label>
            <input
              id="password"
              className="shadow appearance-none border rounded lg:w-2/3 my-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register("password", { required: true })}
            />
            <button
              type="submit"
              className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Acceder
            </button>
            <br />
            <p>Ingresa sin Logearte</p>
            <button onClick={()=>{navigate("/Home")}} className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              Ingresar
            </button>
            <br/>
            <p>Registrate</p>
            <button onClick={()=>{navigate("/Register")}} className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              Ingresar
            </button>
            <br/>
            <div className="flex justify-center">
              <a className="w-1/6" href="https://www.facebook.com/?locale=es_LA">
                <img src={Face} />
              </a>
              <a className="w-1/6" href="https://www.instagram.com/">
                <img src={Insta} />
              </a>
            </div>
            <h1>¡Síguenos!</h1>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;