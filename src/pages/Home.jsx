import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Lista de productos</h1>
      <div>
        {products.map((product) => (
          <article key={product.id}>
            <img
              src={product.img}
              alt=""
            />
            <h2>{product.title}</h2>
            <button>Comprar</button>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Home;
