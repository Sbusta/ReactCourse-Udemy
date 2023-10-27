import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="Register" element={<RegisterPage/>} />

        <Route path='/*' component={<Navigate to="/auth/login"/>}/>
        
    </Routes>
  )
}
