import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: "$19.99",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: "$29.99",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: "$39.99",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="page">Product not found</div>;
  }

  return (
    <div className="page">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>ID: {product.id}</p>
    </div>
  );
};

export default ProductDetail;
