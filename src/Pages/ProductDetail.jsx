import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} width={300} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} style={{ padding: '0.5rem 1rem', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
