import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const initialProductState = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

// eslint-disable-next-line react/prop-types
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProductState);

  const getProducts = async () => {
    const res = await fetch("./products.json");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const createProduct = (product) => {
    setProducts([product, ...products]);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const updateProduct = (newProduct) => {
    const newProducts = products.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct;
      }
      return product;
    });

    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider
      value={{ products, createProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
