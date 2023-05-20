import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Update = () => {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const findProduct = products.find((item) => item.id === parseInt(id));
    setTitle(findProduct.title);
    setDescription(findProduct.description);
    setPrice(findProduct.price);
    setImg(findProduct.img);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price,
      img,
      id: parseInt(id),
      user: user.email,
    };
    updateProduct(newProduct);
    console.log("editado");
  };

  return (
    <div>
      <h1>Actualizar producto</h1>
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
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};
export default Update;
