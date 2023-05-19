import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{user ? "Usuario existe" : "No existe"}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Dashboard;
