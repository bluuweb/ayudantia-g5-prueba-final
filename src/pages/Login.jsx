import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    }
    alert("credenciales incorrectas");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Acceder</button>
      </form>
    </div>
  );
};
export default Login;
