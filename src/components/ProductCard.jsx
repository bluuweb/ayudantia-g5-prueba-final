import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContenxt";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { addFavorite, favorites } = useContext(FavoriteContext);

  const handleAddFavorite = () => {
    addFavorite(product);
  };

  // eslint-disable-next-line react/prop-types
  const isFavorite = favorites.some((favorite) => favorite.id === product.id);

  return (
    <article>
      <img
        // eslint-disable-next-line react/prop-types
        src={product.img}
        alt=""
      />
      <h2>
        {
          // eslint-disable-next-line react/prop-types
          product.title
        }
      </h2>
      <button>Comprar</button>
      <button
        onClick={handleAddFavorite}
        disabled={isFavorite}
      >
        ❤️
      </button>
    </article>
  );
};
export default ProductCard;
