import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

const App = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};
export default App;
