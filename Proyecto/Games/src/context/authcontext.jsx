import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
/**
 * creamos un contexto para poder acceder al usuario
 */
const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorsA, setErrorsA] = useState([]);
  const [loading,setLoading]=useState(false);
  //enviar datos para el registro
  const signup = (user) => {
    try {
      setUser(user);
      setIsAuthenticated(true)
      setLoading(true)  
    } catch (error) {
      console.log(error)
    }
  };
  //enviar datos para el login
  const signin = (user) => {
    try {
      setUser(user);
      setIsAuthenticated(true)
      setLoading(true)  
    } catch (error) {
      console.log(error)
    }
    
  };
  //funcion para eliminar los errores despues de un tiempo
  useEffect(() => {
  }, [errorsA]);

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider
      value={{
        //importamos para que todos, puedan usarlo
        signup,
        user,
        loading,
        isAuthenticated,
        errorsA,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
