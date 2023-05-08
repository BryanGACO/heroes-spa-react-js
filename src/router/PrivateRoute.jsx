import { useContext, useEffect } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    // Use efect para evitar que se reescriba el lastpath cuando no ha cambiado todo este tema
    useEffect(() => {        
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search])
   
    return (logged)
        ? children
        : <Navigate to="/login" />
}
