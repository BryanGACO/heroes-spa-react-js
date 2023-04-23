import { Outlet } from "react-router-dom"
import { AuthProvider } from "../auth"

export const AppRouter = () => {
  return (
    <AuthProvider>      
      <Outlet />
    </AuthProvider>
  )
}
