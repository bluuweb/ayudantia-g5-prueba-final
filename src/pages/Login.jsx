import Swal from "sweetalert2";
import { useState } from "react";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);

    if (!email.trim()) {
      setError(true);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Falta llenar el email",
      });
    }

    const user = login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    }
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas",
    });
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
        {error && (
          <div className="invalid-feedback">Please provide a valid city.</div>
        )}
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
