import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { addFavorites, favorites } = useContext(FavoritesContext);

  return (
    <article>
      <img
        src={product.img}
        alt=""
      />
      <h2>{product.title}</h2>
      <button>Comprar</button>
      <button
        onClick={() => addFavorites(product)}
        disabled={favorites.some((item) => item.id === product.id)}
      >
        ❤️
      </button>
    </article>
  );
};
export default ProductCard;
