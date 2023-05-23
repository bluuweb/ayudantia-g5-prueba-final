import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <nav>
      <ul>
        <li>
          <strong>Tienda</strong>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/"
            role="button"
          >
            Home
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink
                to="/dashboard"
                role="button"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                role="button"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                role="button"
              >
                <i>❤️</i> {favorites.length}
              </NavLink>
            </li>
            <li>
              <button
                role="button"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                role="button"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                role="button"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
