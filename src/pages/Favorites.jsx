import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContenxt";

const Favorites = () => {
  const { favorites, deleteFavorite } = useContext(FavoriteContext);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((product) => (
        <article key={product.id}>
          <p>{product.title}</p>
          <button onClick={() => deleteFavorite(product.id)}>Eliminar</button>
        </article>
      ))}

      {favorites.length === 0 && <p>No tienes productos favoritos</p>}
    </div>
  );
};
export default Favorites;
