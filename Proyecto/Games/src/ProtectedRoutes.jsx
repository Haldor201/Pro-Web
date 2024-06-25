import { useAuth } from "./context/authcontext";
import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoutes() {
  const { loading,isAuthenticated } = useAuth();

  if(loading) return <h1>Loading</h1> 
  if (!loading&&!isAuthenticated) {
    return <Navigate to="/Login" replace></Navigate>;
  }
  /**si esta autenticado, que siga con el componente que esta dentro */
  return <Outlet></Outlet>;
}
