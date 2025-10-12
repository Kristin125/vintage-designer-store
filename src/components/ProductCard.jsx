import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '5px', textAlign: 'center' }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} width={200} />
      </Link>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} style={{ padding: '0.5rem 1rem', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

