import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", description: "This is product 1" },
  { id: 2, name: "Product 2", description: "This is product 2" },
  { id: 3, name: "Product 3", description: "This is product 3" },
];

const Products = () => {
  return (
    <div className="page">
      <h1>Our Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="product-link">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
