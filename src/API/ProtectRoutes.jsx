import { Navigate, Outlet } from "react-router-dom";
import Login from "../Pages/Login";


const ProtectRoutes = () => {

  return localStorage.getItem("token") ?  <Outlet /> : <Navigate to="/login" />;

  
};

export default ProtectRoutes;
