import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, deleteFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((item) => (
        <article key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => deleteFavorites(item.id)}>Eliminar</button>
        </article>
      ))}
      {favorites.length === 0 && <p>No existen favoritos</p>}
    </div>
  );
};
export default Favorites;
