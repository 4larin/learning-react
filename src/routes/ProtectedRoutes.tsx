import { Navigate, Outlet } from "react-router-dom"



const ProtectedRoutes = ({ children }: any) => {
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes



