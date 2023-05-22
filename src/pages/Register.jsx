import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("no coinciden las contraseñas");
    }

    const user = register({
      name,
      email,
      phone,
      password,
      id: Date.now(),
    });

    if (user) {
      return alert("usuario ya existe");
    }

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRepassword("");
    return navigate("/dashboard");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repita Contraseña"
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        <button type="submit">Registrame</button>
      </form>
    </div>
  );
};
export default Register;
