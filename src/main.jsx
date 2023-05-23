import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import FavoritesProvider from "./context/FavoritesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FavoritesProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
