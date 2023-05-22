import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

const initialFavorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

// eslint-disable-next-line react/prop-types
const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, deleteFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
