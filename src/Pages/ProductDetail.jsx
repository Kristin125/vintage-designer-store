import { useParams } from 'react-router-dom';
import products from '../data/products.js';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container product-detail">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

