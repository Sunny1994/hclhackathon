import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

interface ProtectedRoutes {
    children: ReactNode
}

const ProtectedRoutes = ({children}: ProtectedRoutes) => {
   const token = localStorage.getItem("token");

   if(!token){
    return <Navigate to="login" replace/>
   }

   return <>{children}</>
}

export default ProtectedRoutes;