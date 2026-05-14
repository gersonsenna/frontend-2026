import { AuthContext } from "../contexts/AuthContexts";
import { useContext } from "react";

function Login() {
  const { login } = useContext(AuthContext);

  const handleEntrar = () => {
    login({ usuario: "gerson@iesb.edu.br", senha: "123123" });
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleEntrar}>Entrar</button>
    </>
  );
}

export default Login;