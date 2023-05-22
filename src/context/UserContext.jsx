import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const initialStateUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const initialStateUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(initialStateUsers);
  const [user, setUser] = useState(initialStateUser);

  const getUsers = async () => {
    const res = await fetch("users.json");
    const users = await res.json();
    setUsers(users);
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = async (email, password) => {
    const userDB = users.find(
      (item) => item.email === email && password === item.password
    );
    if (userDB) {
      setUser(userDB);
    } else {
      setUser(null);
    }

    return userDB;
  };

  const register = (user) => {
    const userDB = users.find((item) => item.email === user.email);
    if (userDB) {
      return true;
    }
    setUsers([user, ...users]);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUser = (user) => {
    const newUsers = users.map((item) => (item.id === user.id ? user : item));
    setUsers(newUsers);
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
