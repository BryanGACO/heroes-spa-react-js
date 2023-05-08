import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    login('Bryan Garcia');

    navigate('/marvel', {
      replace: true // No queremos que la persona pueda regresar al login si ya lo paso
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>

  )
}
