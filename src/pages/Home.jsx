import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <h1>Lista de productos</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};
export default Home;
