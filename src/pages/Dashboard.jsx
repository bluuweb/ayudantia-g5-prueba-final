import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createProduct, products, deleteProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price,
      img,
      id: Date.now(),
      user: user.email,
    };
    createProduct(newProduct);
  };

  return (
    <div>
      <h1>Bienvenido: {user.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="img url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <div>
        {products
          .filter((product) => product.user === user.email)
          .map((product) => (
            <article key={product.id}>
              <h2>{product.title}</h2>
              <button onClick={() => deleteProduct(product.id)}>
                Eliminar
              </button>
              <Link to={`/update/${product.id}`}>Editar</Link>
            </article>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
